import hashlib
import time

def md5(str_):
    m = hashlib.md5()
    m.update(str_.encode(encoding="utf-8"))
    return m.hexdigest()

def eval(str_):
    str_ = str_[:-3]
    now = int(time.time())
    return str_ in [md5(str(i)) for i in range(now-20,now+1)]

if __name__ == "__main__":
	start = time.time()
	str_ = md5(str(int(time.time())))+"hhh"
	print(eval(str_))
	end = time.time()
	print(end - start)