<?php declare(strict_types=1);


/**
 * Nextcloud - Dashboard Charting app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Mark Partlett <mark@partlettconsulting.com.au>
 * @copyright 2019, Mark Partlett <mark@partlettconsulting.com.au>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\DashboardHighCharts\Service;

use OCA\Dashboard\AppInfo\Application;
use OCP\ILogger;

class MiscService {

	/** @var ILogger */
	private $logger;

	public function __construct(ILogger $logger) {
		$this->logger = $logger;
	}


	/**
	 * @param string $message
	 * @param int $level
	 */
	public function log(string $message, $level = 2) {
		$data = [
			'app'   => Application::APP_NAME,
			'level' => $level
		];

		$this->logger->log($level, $message, $data);
	}


	/**
	 * @param array $arr
	 * @param string $k
	 *
	 * @param string|array|integer $default
	 *
	 * @return array|string|integer
	 */
	public static function get(array $arr, string $k, $default) {

		if (!key_exists($k, $arr)) {
			return $default;
		}

		return $arr[$k];
	}

}

