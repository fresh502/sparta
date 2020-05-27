from pymongo import MongoClient
client = MongoClient('localhost', 27017)
client.drop_database('dbsparta')
db = client.dbsparta

## 코딩 할 준비 ##

# target_movie = db.movies.find_one({'title': '매트릭스'})
# if target_movie is not None:
#     target_star = target_movie['star']

#     movies = list(db.movies.find({'star': target_star}))

#     for movie in movies:
#         title = movie['title']
#         db.movies.update_one({'title': title}, {'$set': {'star': 0}})
db.movies.insert_one({'name': 'bob'})
