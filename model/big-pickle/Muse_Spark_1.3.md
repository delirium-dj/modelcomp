# Big Pickle — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** Free stealth reasoning model on OpenCode Zen for deliberate analysis, multi-step problem solving, and tool use. Identity undisclosed by OpenCode; community consensus is GLM-4.6 by Zhipu AI / Z.AI. Described as roughly Claude Sonnet 4.5/4.6-class on coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), `https://opencode.ai/zen/v1/chat/completions` (Chat Completions only, NOT Responses API)
- **Release / knowledge:** 2025-10-17 (models.dev); knowledge cutoff 2025-01
- **IDs:** `big-pickle`
- **Context window:** 200,000 tokens total (160,000 input / 32,000 output per models.dev)
- **Modalities:** text input, text output only; reasoning = yes; `tool_call` = true; `structured_output` = true; `attachment` = false
- **Pricing (as of 2026-09-17):** Free / Free / Free cached on Zen (limited time). Paid equivalent often cited as GLM-4.6 (~$0.60 / $2.20 per 1M) or GLM-5.2 family. During free period collected data may be used to improve the model — do not send confidential repos.
- **Architecture (attributed base, unverified by vendor):** 357B MoE, 32B active (GLM-4.6 reports)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.4%** (rank 118/154, 24th percentile — BenchmarkList)
- Terminal-Bench Hard: **25.0%** (rank 90/327)
- Terminal-Bench 2.0: **28.1%**
- Tau3-Banking: **10.5%** (rank 63/141, 56th percentile)
- Tau2-Bench Telecom: **70.5%** (BenchmarkList) / **76.9%** τ²-bench (BenchLM — source variance noted)
- GDPval-AA: **934** Elo (vs 1,754 for Muse Spark 1.3)
- Claw-Eval / ClawProBench: **no verified public Claw-Eval score found** for `big-pickle` as of 2026-09-17. Closest proxy found: ClawProBench 56.2945 (34th percentile, n=48) for `glm-4.6` — treat as provisional, not equivalent.
- SWE Atlas Codebase QnA (direct `big-pickle` eval via mini-swe-agent): **50.8% (63/124)**

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (BenchLM AA-GPQA) / **0.81** (ApX aggregate) — source variance noted
- HLE: **5.5%**
- LCR (AA-LCR): **28.3%**
- CritPt: **0.0%**
- FrontierMath v2 Tier 4: **2.128%**
- Omniscience Accuracy 21.4%, Hallucination Rate 67.6%, Index -31.7%
- Artificial Analysis Intelligence Index (GLM-4.6 proxy): **~23.4% normalized / rank ~76**; BenchLM overall **53.94/100, #107/411**

Coding:

- SWE-bench Verified: **0.68**
- LiveCodeBench: **81.0%** (rank 55/123)
- SciCode / AA-SciCode: **38.4% / 33.1%**
- Vibe Code Bench v1.1: **3.09–3.1%** (very low)
- SWE Atlas Codebase QnA (direct): **50.8%**

Long context:

- 200K total context, 32K max output — no MRCR 256K+ score possible; MRCR-class retrieval not reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** Mid-low frontier. Tau3 10.5% and TB 2.1 49.4% lag frontier (Muse 50.5% / 88.8%, Fable/GPT-5.6 84–89%). Tau2 70%+ and SWE-Atlas 50.8% keep it above weak models. No verified Claw-Eval score — penalized for missing data.
- **Reasoning: 60/100.** Adequate multi-step / tool-integrated reasoning, clear gain over GLM-4.5 per Zhipu, but HLE 5.5%, CritPt 0%, LCR 28.3% are far below frontier (Muse HLE 48.7%, LCR 83%, GPQA 93.5%).
- **Context window: 70/100.** 200K covers most single-feature work but is 1/5 of 1M tier. Per methodology: 200K tier = 70. 32K max output is tightest in fleet — chunk large generations.
- **Multimodal: 15/100.** Text-only in/out. No image, audio, video, or PDF understanding reported.
- **Coding: 70/100.** LiveCodeBench 81% and SWE-bench 0.68 are solid; community rates Sonnet 4.5-class for daily-driver coding. Dragged down by Vibe 3.1% and SciCode ~33–38% vs frontier 58–75%.
- **Cost efficiency: 100/100.** $0/$0 on Zen free tier. Paid fallback (GLM-4.6 $0.60/$2.20) would be ~92/100 — still very cheap.
- **Overall Score: 62/100.** Mean of above. Best fit: zero-cost daily driver; escalate to paid frontier on 2 failures or whole-repo / 1M-context jobs.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
