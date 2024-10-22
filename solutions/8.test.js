const eight = require('./8');

test('Answers correctly', () => {
  expect(eight(input)).toStrictEqual([1727, 552]);
});

const input = `acc +40
acc -14
nop +386
jmp +262
acc -4
nop +25
jmp +500
acc +13
acc -1
acc -7
acc +37
jmp +319
acc +46
jmp +429
acc -4
acc -8
jmp +335
acc +12
jmp +78
acc +16
acc -11
nop +137
acc +41
jmp +210
jmp +83
acc +7
jmp +48
nop +374
acc +11
jmp +268
acc +1
acc -17
acc +15
jmp +178
acc +23
jmp -5
jmp +374
acc +8
acc +5
nop +231
jmp +1
jmp -22
acc +44
acc +39
jmp +415
acc +44
acc -8
acc -10
jmp +36
nop +385
acc +6
jmp -37
nop +245
acc +5
jmp +261
acc -3
jmp +23
acc +37
jmp +532
acc -18
acc -8
nop +405
jmp +499
acc -1
acc +3
acc +47
acc +38
jmp +67
jmp -9
acc +16
acc -4
acc +23
acc +6
jmp -14
jmp +229
nop +235
acc +3
acc +17
jmp +521
acc +49
acc -8
acc +10
jmp +103
jmp +75
acc +22
nop +527
acc +36
acc +32
jmp -46
nop +434
jmp +447
jmp +159
acc +37
acc -19
acc +39
jmp +181
jmp +1
jmp +162
jmp +1
acc +0
acc +0
acc +34
jmp +241
acc +42
acc +12
jmp -75
jmp -70
acc +42
acc -4
acc +49
jmp +456
jmp +277
jmp +302
acc +45
acc +19
nop -41
jmp +318
jmp +153
acc +9
nop +323
jmp -113
nop -9
jmp +1
acc +37
acc +12
jmp +448
acc +3
acc +38
jmp -114
acc +7
jmp +180
acc -5
acc -10
jmp +117
jmp +320
acc +9
jmp +330
acc +18
jmp +1
jmp +330
nop +450
acc +10
jmp +22
acc +44
jmp +298
acc +38
nop +433
acc +1
jmp +431
jmp +339
nop +251
jmp -126
nop +191
jmp +294
acc -7
acc +30
acc -15
jmp +400
jmp +441
acc +5
acc +17
nop +35
nop +103
jmp +410
nop -122
acc +35
jmp +73
acc -13
jmp +291
acc -11
jmp +95
acc -12
acc +19
acc -16
acc +34
jmp +140
acc -15
acc +6
acc -4
jmp +190
acc +11
acc +0
acc +19
acc +43
jmp +167
acc +29
nop +371
jmp +1
jmp -36
acc +20
acc +20
acc +26
jmp +374
jmp -76
acc +20
jmp +115
acc +13
acc +25
acc +39
jmp -115
acc -18
nop -64
jmp +133
acc -18
acc +32
nop -198
jmp -157
acc +6
acc +41
nop +36
jmp -136
jmp +1
jmp +41
acc -14
acc -17
acc +1
jmp +280
jmp +1
jmp +72
acc +7
jmp +1
acc -12
acc -8
jmp +291
acc -13
acc +36
acc +0
jmp +97
acc +20
acc +0
acc +12
acc -16
jmp -196
nop +342
jmp -122
acc +21
nop -33
acc +38
jmp +285
acc -9
acc -17
acc -2
acc +25
jmp +232
jmp +146
jmp +312
acc +11
nop -54
nop +351
jmp -46
acc +27
jmp -244
jmp +262
acc +42
acc +5
nop +4
acc +20
jmp +239
jmp -62
nop -147
jmp -169
acc -12
acc +40
acc +29
jmp +178
nop +310
jmp +49
acc -18
acc +5
jmp +297
jmp +244
acc +31
acc +21
acc +47
acc +41
jmp +76
acc +29
acc +22
acc +16
jmp -121
jmp -244
acc +45
acc -9
acc +36
acc +5
jmp +265
acc +13
acc +47
acc -11
jmp +338
acc +0
jmp +85
acc +18
acc +27
jmp +1
acc +43
jmp +227
jmp +276
acc +42
nop +52
acc -15
nop +311
jmp -199
acc +45
jmp +286
acc -8
acc +7
acc +9
acc -18
jmp -273
acc +50
jmp +239
nop +31
acc +16
jmp -162
acc +12
nop -204
acc +27
jmp -166
acc -4
acc +38
acc +50
nop +120
jmp +243
acc +29
jmp -300
acc +0
nop +179
acc -6
jmp -136
nop -305
acc +15
jmp -136
acc -6
jmp +172
jmp +41
acc -7
nop +81
jmp +199
jmp +54
acc +1
acc +25
jmp -283
nop -132
acc +47
jmp +239
acc +45
acc -14
acc +1
acc +0
jmp +10
acc -15
nop -338
nop -257
jmp +1
jmp -218
acc +36
acc +33
acc +28
jmp -230
acc -5
acc -14
jmp +1
jmp -87
acc +48
nop +141
nop +224
acc +42
jmp +22
nop +140
acc +16
jmp +1
acc +16
jmp -92
acc +37
jmp -368
acc +27
jmp +155
acc +11
nop +196
acc +5
jmp -269
nop -92
jmp -276
acc +46
acc +6
acc +34
jmp -258
jmp +2
jmp +80
jmp +36
acc +20
jmp -181
nop -54
acc +48
nop +166
nop +165
jmp -263
acc +47
acc +33
jmp +54
nop -216
acc +37
acc +19
jmp -349
acc +12
nop -156
nop +7
acc -5
jmp -390
acc -10
jmp -315
nop -393
jmp -89
jmp +1
jmp -312
acc +4
jmp -120
acc -2
nop +23
acc +42
acc +28
jmp -205
acc +43
acc +6
jmp -49
acc -13
acc +1
acc +10
acc +19
jmp -394
acc -15
acc +0
jmp -365
acc +23
acc -17
nop +23
acc +0
jmp -37
acc +9
acc +31
jmp -7
jmp -278
nop +147
acc +5
acc +43
jmp -149
nop -65
acc +19
acc +46
jmp +59
acc +29
nop +169
jmp +131
acc +43
acc +50
jmp +10
acc -4
jmp -390
acc +24
jmp -236
acc +10
acc +19
nop -160
acc +32
jmp +162
acc +29
jmp +170
jmp -14
acc +36
jmp -88
acc +2
acc +1
acc +1
jmp -86
nop +48
acc +21
jmp -356
acc +0
nop -321
nop -247
nop +127
jmp -279
jmp +40
acc +23
acc +47
acc +6
jmp -438
acc +26
acc +35
nop +120
acc +2
jmp -58
acc +30
acc +2
jmp +42
acc +8
acc +24
acc +9
acc +19
jmp -351
acc +40
acc +18
acc +43
acc +29
jmp +9
jmp +1
jmp -210
jmp -82
acc +41
acc +45
jmp -28
nop -395
jmp +71
acc +38
acc -13
nop -251
acc -9
jmp -366
acc +34
acc +7
acc -7
jmp -212
acc +6
acc +24
acc +1
acc -11
jmp +94
acc +20
acc -14
acc -5
jmp +81
acc +37
jmp +77
acc -15
nop -486
jmp +39
jmp +1
acc +39
acc +49
jmp -371
acc +5
nop -446
jmp -267
acc +39
jmp +67
acc +35
acc +8
nop -419
jmp -53
acc +20
acc -9
acc +46
acc +30
jmp -136
acc +35
jmp +56
jmp +70
acc +13
acc +48
jmp -290
acc -18
acc +48
acc +50
jmp -225
jmp -226
acc +34
jmp -391
acc +49
nop -324
acc -10
acc +41
jmp -130
jmp +6
jmp -555
acc -17
jmp -433
acc +33
jmp -64
jmp -476
nop -138
nop -556
acc +47
jmp +27
jmp -78
acc -16
acc -4
acc -3
acc +48
jmp -292
acc +43
acc +3
acc +44
jmp +15
acc +49
acc +5
acc +4
acc +27
jmp -491
acc +6
acc +38
acc +31
nop -70
jmp -379
acc +0
acc +2
acc +49
jmp -297
jmp -405
jmp -72
jmp -371
jmp -115
acc +7
acc -15
acc -9
jmp -486
acc +3
acc +16
nop -19
acc +14
jmp -296
jmp -233
acc +40
nop -342
nop -58
acc -9
jmp -316
acc +4
acc +15
acc +14
acc +50
jmp -296
acc -11
acc +14
acc +43
acc +38
jmp -391
acc +43
acc +25
acc -5
acc +27
jmp +1`
