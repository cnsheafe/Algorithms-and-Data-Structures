'''Collection of different running averages'''


def simple_avg(data_series, window_length):
    ''' Returns the simple running average.
    Arguments:
        data_series -- Array of numerical values
        window_length -- Integer describing how many values to include
    '''
    averaged_series = []
    init_sum = 0
    for i in range(0, window_length):
        init_sum += data_series[i]
    averaged_series.append(init_sum / float(window_length))
    for i in range(window_length, len(data_series)):
        new_term = data_series[i]
        old_term = data_series[i - window_length]
        next_avg = averaged_series[len(
            averaged_series) - 1] + (new_term - old_term) / float(window_length)
        averaged_series.append(next_avg)
    return averaged_series


def cumulative_avg(data_series, starting_point):
    '''Returns the cumulative running average.
    Arguments:
        data_series -- Array of numerical values
        starting_point -- Indice in data_series to start averaging
    '''
    averaged_series = []
    init_sum = 0
    for i in range(0, starting_point):
        init_sum += data_series[i]
    averaged_series.append(init_sum / float(starting_point))
    for i in range(starting_point, len(data_series)):
        next_avg = (
            data_series[i] + i * averaged_series[len(averaged_series) - 1]) / float(i + 1)
        averaged_series.append(next_avg)
    return averaged_series

x = cumulative_avg([1,2,3,4,1,6,5], 2)
