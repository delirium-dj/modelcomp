# GPT-5.6 Terra — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (max)
- **Short description:** OpenAI's "terra" variant of the GPT-5.6 family (family representative: GPT-5.6 Sol), configured at `max` reasoning effort; OpenAI positions it for agentic/tool work, coding, and knowledge work, per provider-published results.
- **Provider / access:** OpenAI API via `openai/gpt-5.6-terra` (AA marks the provider entry "Provider exact"; 7 API providers listed on AA). No Free ID exists on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-09 (AA; BenchLM radar release event, source https://openai.com/index/gpt-5-6/). Knowledge cutoff: no verified public score found.
- **IDs:** `openai/gpt-5.6-terra` (no Free ID on Zen)
- **Context window:** 1,048,576 (1M) per curated `meta.json`; AA reports 1,000,000 tokens; BenchLM lists 1,050,000 (status: documented).
- **Modalities:** Text + image in (AA-verified); text out (AA-verified). `meta.json` additionally claims audio/video/PDF input that AA does not credit — recorded as a discrepancy. Reasoning: yes. Tool calls: yes (agentic benchmarks run). JSON mode: no verified public source found.
- **Pricing (as of 2026-09-24):** Paid — $2.00 in / $12.00 out / $0.20 cached-in (90% cache discount) / $2.50 cache write per 1M (AA; BenchLM fallback price label `$2 input / $12 output` matches). Blended 7:2:1 ≈ $1.74/1M (AA). AA cost rank #57/210, $1.40 per II task.
- **Architecture:** Proprietary (AA); weights not published (BenchLM weight access: `not-published`).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI: GPT-5.6, via BenchLM; 8% ref. weight; leader SWE-2 92.8%, 5.4 behind)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI: Terminal-Bench 2.1 leaderboard; Verified)
- Terminal-Bench 3.0: **20.8%** (Terminal-Bench 3.0 leaderboard; BenchLM)
- Terminal-Bench Hard: **57.6%** (AA)
- Terminal-Bench 40: **35.4%** (AA)
- Tau2-Bench: **86.3%** (AA; tau2 harness)
- Tau3-Banking: **40.2%** (AA; tauBanking harness)
- GDPval-AA: **1432.27** (AA; normalized 46.6%)
- IT-Bench SRE: **51.0%** (AA)
- Toolathlon: **53.1%** (OpenAI: GPT-5.6, via BenchLM; 3% ref. weight)
- OSWorld 2.0: **50.2%** (OpenAI: GPT-5.6, via BenchLM; 10% ref. weight; leader GPT-6 Astra 72.6%, 22.4 behind)
- BrowseComp: **87.5%** (OpenAI: GPT-5.6, via BenchLM; 8% ref. weight; leader 92.5%)
- CyberGym: **81.8%** (OpenAI, via BenchLM; display only)
- ExploitGym: **23.2%** (OpenAI, via BenchLM; display only)
- ExploitBench: **52.9%** (BenchLM external section; display only)
- ApprenticeBench: **16%** (NeoCognition: ApprenticeBench GUI results, via BenchLM; display only)
- AutomationBench partial score: **59.6%** (AA)
- Enterprise Ops Gym: **38.5%** (AA)
- APEX Agents: **38.9%** (AA)
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.5%** (AA); **92.9%** (OpenAI: GPT-5.6, via BenchLM); **90.9%** (Vals AI: GPQA-D leaderboard, Verified)
- HLE: **42.9%** (AA); HLE-Verified **51.1%** (Google DeepMind model card, via BenchLM; display only)
- LCR / MLCR: **83.0%** / overall **31.7%** (AA)
- CritPt: **30.0%** (AA)
- FrontierMath v2 Tier 1–3: **84.9%** (BenchLM, 30% weight, provider exact)
- FrontierMath v2 Tier 4: **68.3%** (BenchLM, 10% weight)
- FrontierMath legacy: **84.9%** (BenchLM; display only)
- MMLU-Pro (Vals): **86.7%** (Vals AI leaderboard; Verified; 6% weight)
- LABBench2: **81.2%** (BenchLM; provider/benchmark exact)
- HealthBench Professional: **57.7%** (BenchLM); HealthBench Hard: **32.7%** (BenchLM)
- ARC-AGI-2: **83.9%** (ARC Prize: GPT-5.6 verified results, via BenchLM; 25% weight in BenchLM Reasoning)
- ARC-AGI-3: **0.8%** (ARC Prize: GPT-5.6 verified results, via BenchLM; 15% weight)
- Artificial Analysis Intelligence Index: **42.08 / #38 of 210** (AA; 4 of 4 units); BenchLM overall: **72.76 / #9 of 196** (bench-align-v5; verified-overall rank #6 of 71)
- Omniscience Accuracy: **0.05** (AA); Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified (SWE-bench, Vals): **95.4%** (Vals AI: SWE-bench leaderboard; Verified; display only)
- SWE-bench Pro: **63.4%** (OpenAI: GPT-5.6, via BenchLM; 26% ref. weight)
- LiveCodeBench (Vals): **85.9%** (Vals AI: LiveCodeBench leaderboard; Verified; 8% weight)
- SciCode / AA-SciCode: **55.0%** (AA)
- Vibe Code Bench: no verified public score found
- DeepSWE: **69.6%** (OpenAI: GPT-5.6, via BenchLM; 15% ref. weight)
- CursorBench 3.2: **64.9%** (Cursor evals, via BenchLM; 10% weight)
- VulcanBench v3: **87.0%** (VulcanBench Eval Suite 3 leaderboard, via BenchLM; 3% weight)
- FrontierCode 1.1 Extended: **55.8%** (Cognition: GPT-5.6 models in Devin, via BenchLM; display only)
- Harvey Legal Lab: **85.2%** (AA)
- GDPval PDF all-pass: **24.0%** (AA)

Long context:

- No MRCR/RULER/GraphWalks retrieval value reported at window length (BenchLM has no long-context retrieval row; AA LCR **83.0%** is the closest proxy; no 512K+ retrieval score of ≥98% found).

Other (context): AA speed **82.7 tok/s** (#71/210); TTFT median **211.09 s** (page median ~3.75 s); AIME-25, Analyst Agent: no reported values (AA null). BenchLM category stands: Coding 8/135 (65.1, 95th pct), Knowledge 9/160 (72.1, 95th pct), Reasoning 13/18 (63.1, 29th pct), Multimodal 16/50 (77.2, 69th pct), Agentic 18/105 (59.6, 84th pct). Multimodal: MMMU-Pro **80.7%** (AA and OpenAI, via BenchLM), MMMU-Pro w/ Python **82%** (display). Evidence coverage: 33 published verified rows of 482 tracked; 6 of 8 categories measured (Multilingual and Instruction-Following missing).

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 87.4% (provider) / 77.5% (Vals-verified) sits just under the >88% frontier marker, tau2 86.3% and BrowseComp 87.5% are strong, but GDPval-AA 1432 (normalized 46.6%) is between the 900–1200 mid and >1750 frontier bands and OSWorld 2.0 50.2% / Toolathlon 53.1% / tauBanking 40.2% lag — upper-mid agentic stand (BenchLM 18/105).
- **Reasoning: 88/100.** GPQA 92.5–92.9% (>90% frontier) and HLE 42.9% (>40% frontier) plus FrontierMath T1–3 84.9% and ARC-AGI-2 83.9% anchor the frontier band, but the sub-1% ARC-AGI-3 result, MLCR 31.7%, and BenchLM Reasoning rank 13/18 (29th percentile) cap it at the band's low end.
- **Context window: 95/100.** Verified 1M window (curated 1,048,576; AA 1,000,000; BenchLM 1.05M documented) places it in the ≥1M tier (95–100); no MRCR-style retrieval ≥98% at 512K+ was found, so the tier floor 95 applies.
- **Multimodal: 65/100.** AA-verified input is text + image only (text out), the +image tier (60–70); `meta.json`'s audio/video/PDF-in claims are unverified on AA and not credited (MMMU-Pro 80.7% is mid-tier evidence, not a higher input modality).
- **Coding: 78/100.** TB2.1 87.4% (>85% frontier marker), SciCode 55.0% (frontier marker hit at the edge), LiveCodeBench (Vals) 85.9%, and SWE-bench (Vals) 95.4% are frontier-grade, but DeepSWE 69.6% misses the >74% frontier marker and SWE-bench Pro is 63.4% (BenchLM Coding 8/135, score 65.1) — high mid between the 65–75 mid band and the 90–100 frontier band.
- **Cost efficiency: 82/100.** $2.00/$12.00 per 1M (cached in $0.20, 90% discount) with a 7:2:1 blended ≈$1.74 (AA) sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, closer to the former; cost rank #57/210 on AA.
- **Overall Score: 80.2/100.** Mean of (75 + 88 + 95 + 65 + 78) / 5. Best fit: a premium-priced, 1M-context OpenAI workhorse for verified coding, GPQA/HLE-class knowledge Q&A, and tool-heavy agents, where its 88–92 cost tier is acceptable; less suited for ARC-AGI-3-style abstract reasoning, deep long-context retrieval, or non-text (audio/video) pipelines given unverified modality claims.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, BenchLM model page, OpenAI release source); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.