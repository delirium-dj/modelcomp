## GPT-5.4 Mini

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's compact reasoning model in the GPT-5.4 family, optimized for agentic tasks, coding, and cost efficiency. Non-reasoning variant also exists.
- **Provider / access:** OpenAI (proprietary) — available via OpenAI API, Azure OpenAI, and select inference providers.
- **Release / knowledge:** Released 2026; knowledge cutoff not explicitly stated (GPT-5.4 family).
- **IDs:** `gpt-5.4-mini` (OpenAI API), proprietary endpoints.
- **Context window:** 400,000 tokens.
- **Modalities:** Text, image, speech, video in; text out (multimodal input per OpenAI announcement).
- **Pricing:** Proprietary API pricing; typically lower than Pro variants. Exact pricing not publicly listed in benchmarks.

### Raw benchmarks found
- **Terminal-Bench 2.0:** 60% (OpenAI announcement).
- **Terminal-Bench 2.1 (Vals AI):** 54.7% (Vals AI leaderboard).
- **OSWorld-Verified:** 72.1% (OpenAI announcement).
- **MCP Atlas:** 57.7% (OpenAI announcement).
- **Toolathlon:** 42.9% (OpenAI announcement).
- **Tau2-Bench:** 93.4% (OpenAI announcement).
- **APEX-Agents-AA:** 28.2% (Artificial Analysis).
- **GDPval-AA:** 25.6% / 1095 Elo (Artificial Analysis).
- **AA Agentic Index:** 19.6% (Artificial Analysis).
- **Vibe Code Bench:** 47.97% (Vals AI).
- **AA-SciCode:** 52.1% (Artificial Analysis).
- **FrontierCode 1.1 Main:** 27.0% (Cognition).
- **LiveCodeBench (Vals AI):** 81.5% (Vals AI leaderboard).
- **SWE-Bench (Vals AI):** 73.0% (Vals AI leaderboard).
- **AA Coding Index:** 56.1% (Artificial Analysis).
- **MMMU-Pro:** 76.6% (OpenAI announcement); 78% w/ Python; 73.3% (Artificial Analysis).
- **AA-LCR:** 77.0% (Artificial Analysis).
- **CritPt:** 10.0% (Artificial Analysis).
- **ARC-AGI-1:** 63.70% (ARC Prize leaderboard).
- **ARC-AGI-2:** 18.9% (ARC Prize leaderboard).
- **GPQA:** 88% (OpenAI announcement).
- **HLE:** 41.5% (OpenAI announcement); 28.2% w/o tools.
- **AA-GPQA Diamond:** 87.5% (Artificial Analysis).
- **AA-HLE:** 28.1% (Artificial Analysis).
- **AA-Omniscience Index:** -18.9% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 37.5% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 90.2% (Artificial Analysis).
- **GPQA Diamond (Vals AI):** 83.1% (Vals AI leaderboard).
- **MMLU-Pro (Vals AI):** 84.6% (Vals AI leaderboard).
- **AA-IFBench:** 73.3% (Artificial Analysis).
- **FrontierMath v2 (Tiers 1-3):** 51.228% (Epoch AI leaderboard).
- **FrontierMath v2 (Tier 4):** 9.756% (Epoch AI leaderboard).
- **BenchLM Overall Score:** 53.4/100 (#82 of 959, partial coverage 38/666 benchmarks).
- **Claw-Eval:** Not reported.
- **DeepSWE:** Not reported.
- **Cost per task / speed:** Proprietary API; no public cost-per-task data.

### Normalized scores (1–100)
- **Tool use: 72/100.** Terminal-Bench 2.0/2.1 ~55-60% (frontier ~88%), OSWorld 72% (strong), MCP Atlas 58% (mid), Tau2-Bench 93% (exceptional), Toolathlon 43% (mid). Strong agentic scaffolding but Terminal-Bench below frontier.
- **Reasoning: 78/100.** GPQA 88% / 87.5% (frontier 90%+), HLE 41.5% / 28.1% (frontier 40%+ w/ tools), FrontierMath 51% (frontier ~30%+ → strong), AA-LCR 77% (frontier 95%+), ARC-AGI-1 64% (strong). Strong math/science reasoning; long-context reasoning (AA-LCR) good.
- **Context window: 85/100.** 400K context (methodology: 200K-500K = 65-84; 400K ≈ 80-84). Benchmarks run at 400K.
- **Multimodal: 85/100.** Text, image, speech, video in; text out. MMMU-Pro 76-78% (strong vision). Full multimodal input per OpenAI.
- **Coding: 75/100.** SWE-Bench 73% (Vals, frontier 85%+), LiveCodeBench 81.5% (frontier 90%+), Vibe Code 48% (mid), FrontierCode 27% (low), AA Coding Index 56% (mid). Solid coding but not frontier on SWE-Bench.
- **Cost efficiency: 70/100.** Proprietary mini tier — typically priced below Pro but not free. No public pricing to normalize; estimated mid-range for proprietary mini models.
- **Overall Score: 79/100.** Mean of (72 + 78 + 85 + 85 + 75) / 5 = 79.