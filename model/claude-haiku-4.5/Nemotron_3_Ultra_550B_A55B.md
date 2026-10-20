## Claude Haiku 4.5

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's compact, fast model in the Claude 4.5 family. Non-reasoning variant optimized for speed and cost efficiency. 200K context window.
- **Provider / access:** Anthropic (proprietary) — available via Anthropic API, Amazon Bedrock, Google Vertex AI.
- **Release / knowledge:** Released 2025; knowledge cutoff not explicitly stated.
- **IDs:** `claude-haiku-4-5` (Anthropic API), `claude-haiku-4-5-thinking` (reasoning variant).
- **Context window:** 200,000 tokens.
- **Modalities:** Text, image in; text out (Design Arena 1122 confirms vision). No audio/video declared.
- **Pricing:** Proprietary API pricing; Haiku tier typically lowest cost in Claude family. Exact pricing not publicly listed in benchmarks.

### Raw benchmarks found
- **SWE-Bench Verified:** 73.3% (Anthropic announcement).
- **VulcanBench v3:** 76.2% (VulcanBench July 2026 report).
- **LiveCodeBench (Vals AI):** 41.2% (Vals AI leaderboard).
- **SWE-Bench (Vals AI):** 66.6% (Vals AI leaderboard).
- **Terminal-Bench 2.1 (Vals AI):** 43.8% (Vals AI leaderboard).
- **JobBench:** 16.0% (JobBench paper arXiv:2605.26329).
- **MazeBench (ASCII mode):** 0% (MazeBench leaderboard).
- **Design Arena Website:** 1122 (OpenRouter).
- **GPQA Diamond (Vals AI):** 72.2% (Vals AI leaderboard).
- **MMLU-Pro (Vals AI):** 78.7% (Vals AI leaderboard).
- **BenchLM Overall Score:** 41.15/100 (#135 of 959, partial coverage 10/666 benchmarks).
- **Terminal-Bench / DeepSWE / MCP Atlas / AutomationBench / GDPval / OSWorld / BrowseComp / Tau2 / AA-LCR / CritPt / AA Intelligence Index / AA-HLE / AA-Omniscience / FrontierMath:** Not reported on BenchLM.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Proprietary API; Haiku tier optimized for speed/low latency. No public cost-per-task data.

### Normalized scores (1–100)
- **Tool use: 50/100.** Terminal-Bench 2.1 43.8% (low, frontier ~88%), JobBench 16% (very low), MazeBench 0% (very low). No MCP Atlas, AutomationBench, GDPval, OSWorld, Tau2, BrowseComp. Tool use appears weak for agentic tasks.
- **Reasoning: 60/100.** GPQA Diamond 72.2% (frontier 90%+ → ~60), MMLU-Pro 78.7% (mid). No HLE, AA-LCR, CritPt, FrontierMath, AA Intelligence Index. Knowledge reasoning moderate; long-form reasoning unproven.
- **Context window: 70/100.** 200K context (methodology: 200K = 70).
- **Multimodal: 70/100.** Text + image in (Design Arena 1122 confirms vision). No audio/video. Vision capability confirmed but limited benchmark data.
- **Coding: 65/100.** SWE-Bench Verified 73.3% (mid, frontier 85%+), VulcanBench 76.2% (strong), SWE-Bench (Vals) 66.6% (mid), LiveCodeBench 41.2% (low). Solid SWE-Bench but weak LiveCodeBench suggests inconsistent coding.
- **Cost efficiency: 75/100.** Proprietary Haiku tier — typically lowest cost in Claude family (~$0.25/$1.25 estimated). Not free; estimated mid-range for proprietary compact models.
- **Overall Score: 63/100.** Mean of (50 + 60 + 70 + 70 + 65) / 5 = 61.