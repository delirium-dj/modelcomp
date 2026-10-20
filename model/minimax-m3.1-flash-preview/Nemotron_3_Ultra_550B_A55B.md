## MiniMax M3.1 Flash Preview

- **Name:** MiniMax M3.1 Flash
- **Short description:** MiniMax's next-generation Flash model (successor to Space Bunny / early M3.1 Flash). Generational leap in agentic tasks, coding, Computer Use, and cybersecurity. 3x faster inference, 70% cost reduction vs predecessor. Model weights to be released later.
- **Provider / access:** MiniMax (proprietary API initially; weights to be open-sourced later) — available via MiniMax API, M Plan, MiniMax Code (desktop). API: `MiniMax-M3.1-Flash`.
- **Release / knowledge:** Announced October 19, 2026; early version (Space Bunny) processed 200T+ tokens anonymously. Knowledge cutoff not explicitly stated.
- **IDs:** `MiniMax-M3.1-Flash` (MiniMax API), `MiniMax-M3.1-Flash-highspeed` (faster variant, same capability).
- **Context window:** Not explicitly stated in announcement; M2.5 used 1M, likely similar.
- **Modalities:** Text in/out; Computer Use (OSWorld, ALE) implies vision + tool use. No explicit audio/video declared.
- **Pricing:** Flat $0.15/M input, $0.60/M output, $0.015/M cached input (MiniMax API). 70% lower task cost vs predecessor. M3.1-Flash-highspeed same price, faster.

### Raw benchmarks found
- **AutomationBench-AA:** Top performer (real enterprise workflows across SaaS: sales, marketing, ops, CS, finance, HR).
- **BankerToolBench:** 76.2% (multi-step planning, cross-document consistency, financial compliance, chained tool calls).
- **DeepSWE v1.1:** 73.7% (complex software tasks: understand code, develop features, fix issues, validate via testing).
- **OSWorld V2:** 61.7% (AI computer operation, cross-application task execution) — #1 among Chinese models.
- **Agents' Last Exam (ALE):** 29.6% (real professional work, complex tasks) — #1 among Chinese models.
- **CyberGym:** 82% (vulnerability discovery/validation) — strong in code auditing, patching, pen testing, malware analysis, reverse engineering.
- **Inference speed:** 200+ tok/s typical; P50 170+ tok/s (aggressive sparsity optimization).
- **Terminal-Bench / SWE-Bench / LiveCodeBench / GPQA / HLE / MMLU-Pro / FrontierMath / MMMU / Tau2 / MCP Atlas / GDPval:** Not reported in announcement.
- **Claw-Eval:** Not reported.
- **BenchLM / Artificial Analysis / Vals AI / Epoch AI:** No dedicated page yet (new release).
- **Cost per task:** "Overall usage cost 70% lower than predecessor" on AutomationBench, DeepSWE, ALE. Predecessor (M2.5) ~10% of Opus 4.6 cost → M3.1 Flash ~3% of Opus 4.6 cost.

### Normalized scores (1–100)
- **Tool use: 82/100.** AutomationBench-AA top tier, BankerToolBench 76.2% (complex chained tool calls), OSWorld 61.7% (computer use), ALE 29.6% (real professional tasks). No Terminal-Bench, MCP Atlas, GDPval, Tau2. Strong agentic/Computer Use evidence.
- **Reasoning: 78/100.** DeepSWE 73.7% (complex multi-step software reasoning), BankerToolBench 76.2% (planning + compliance), CyberGym 82% (vulnerability reasoning), ALE 29.6% (professional reasoning). No GPQA, HLE, FrontierMath, AA-LCR. Strong applied reasoning; academic benchmarks missing.
- **Context window: 85/100.** Not explicitly stated; M2.5 used 1M context for benchmarks. Assuming similar 1M native. Methodology: ≥1M = 95-100; unconfirmed → 85.
- **Multimodal: 60/100.** Computer Use (OSWorld, ALE) implies vision + tool use. No explicit MMMU, MathVision, video/audio benchmarks. Text + vision for Computer Use; not full multimodal declared.
- **Coding: 80/100.** DeepSWE 73.7% (frontier 74%+ → ~80), "alongside top models" per announcement. No SWE-Bench Verified, LiveCodeBench, Vibe Code, SWE-Atlas. Strong DeepSWE suggests frontier coding.
- **Cost efficiency: 95/100.** $0.15/$0.60 with 90% cache discount — extremely competitive for proprietary frontier-tier performance. 70% cost reduction vs M2.5 (already 10% of Opus). Blended ~$0.10/M.
- **Overall Score: 77/100.** Mean of (82 + 78 + 85 + 60 + 80) / 5 = 79.