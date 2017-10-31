def simple_avg(data_series, window_length):
    averaged_series = []
    init_sum = 0
    for i in range(0, window_length):
        init_sum += data_series[i]
    averaged_series.append(init_sum/window_length)
    for i in range(window_length, len(data_series)):
        new_term = data_series[i]
        old_term = data_series[i-window_length]
        next_avg = averaged_series[len(averaged_series)-1] + (new_term - old_term)/float(window_length)
        averaged_series.append(next_avg)
    return averaged_series

def center_avg(data_series, window_length):
    averaged_series = []
    init_sum = 0
    L = window_length/2
    for i in range(0, window_length):
        init_sum += data_series[i]
    averaged_series.append(init_sum/window_length)
    for i in range(L + 1, len(data_series) - L):
        new_term = data_series[i+1, i+L]
        old_term = data_series[i-L]
        next_avg = averaged_series[len(averaged_series)-1] + (new_term - old_term)/window_length
        averaged_series.append(next_avg)
    return averaged_series
myAvg = simple_avg([1,5,3,2,10,12,8,6,22,9,11], 3)
myCenterAvg = center_avg([1,5,3,2,10,12,8,6,22,9,11], 3)
print(myCenterAvg)