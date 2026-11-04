# Gemini 4 Carbon — findings by Beam

- Source: Google / Gemini 4 Carbon, `google/gemini-4-carbon`
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (Google DeepMind) — reasoning model; staged rollout to cyber defenders and trusted partners (Fairwind Program); no public API at announcement.
- **Short description:** Google DeepMind's strongest model for cybersecurity and long-horizon agentic software engineering, built on Gemini 4 Argon. Leads HLE-Diamond (69.1%), SEC-bench Pro (88.2%), and the Artificial Analysis Intelligence Index (60, #1/66); restricted pre-release access at launch.
- **Provider / access:** Google DeepMind (`google/gemini-4-carbon`); served via Google's own API (Artificial Analysis lists 1 provider). Staged rollout — cyber defenders first, then trusted partners; general developer/business/consumer access "coming soon" (no date given). OpenCode Zen route `opencode/gemini-4-carbon`.
- **Release / knowledge:** Announced 2026-10-28 (blog); Vals AI lists 2026-10-29. Knowledge cutoff: not disclosed (Epoch AI: Unknown).
- **IDs:** `gemini-4-carbon` / `google/gemini-4-carbon` / `opencode/gemini-4-carbon`. No free ID on Zen (paid only).
- **Context window:** 1,000,000 tokens input, up to 1,000,000 output tokens (per AI Model Timeline + Vals AI). AA reports 1M context (~1,500 A4 pages).
- **Modalities:** Text, image, speech, video input; text output. Reasoning (extended thinking). Tool/function calling, JSON mode. Multimodal.
- **Pricing (as of 2026-11-04):** Introductory $2.00/$10.00 per 1M in/out (promotional, through introductory period); standard $4.00/$20.00 per 1M in/out thereafter; cached input 95% discount (~$0.20/$1.00 per 1M). Blended (3:1) ~$8.00 per 1M. No free tier. Data-usage/privacy: gated launch, cyber-defender cohort; consumer availability pending.
- **Architecture:** Proprietary; parameter count undisclosed. Reasoning model (extended thinking / chain-of-thought). Built on Gemini 4 Argon.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Estimated (model-based) figures from benchgap are labeled "est." and treated as low confidence.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **60** (rank #1 of 66; Google blog cites 59 on v5.0) (AA, Google blog)
- BenchLeader Index: **69.2** (high reasoning effort), #2 of 585; medium 65.0 (#22), low 65.0 (BenchLeader)
- Terminal-Bench 4.0: **63.13%** ±2.20 (Vals AI, rank 4/59, reasoning effort high); AA run **65.15/65.2** (AA, Google comparison quotes 65.2) (Vals AI, AA)
- Vals Index v2.2: **70.45%** ±0.97 (#2 of 32) (Vals AI)
- Vibe Code Bench v1.1: **89.06%** (#8 of 123, OpenHands harness) (Vals AI)
- AutomationBench: **53.9%** measured (AA measured 77.8%) (AA, benchgap)
- FrontierSWE v2: **61.2%** (Google blog/Sugra) (Sugra)
- FrontierCode 2.0: **38.6%** measured (benchgap)
- Agents' Last Exam v1.1: **77.4%** (Sugra, ALE-Claw harness)
- OSWorld 2.1 offline subset: **81.5%** (Sugra, Gemini CUA harness)
- SWE-sweep: **9.6%** (Sugra, mini-swe-agent)
- Tool use (AA Agentic Index): **58.2** est. (benchgap, low confidence)
- AA Tau3 Banking: **50.2%** est. (benchgap)
- Terminal-Bench 2.1: **87.4%** est. (benchgap, low confidence)
- BrowseComp: **96.6%** est. (benchgap, low confidence)
- AA ITBench: **54.3%** est. (benchgap)

Reasoning / knowledge:

- HLE-Diamond: **69.1%** (reasoning 79.6%, knowledge 58.6%; no tools, 1,000 questions) (TokenPost) — #1 on HLE-Diamond
- HLE (no tools): **60.4%** measured (AA-HLE, benchgap); HLE w/ tools **70.9%** est. (benchgap)
- GPQA Diamond: **94.2%** est. (benchgap, low confidence); AA-GPQA **93.7%** est. (benchgap); Vals GPQA Diamond **93.3%** est.
- MMLU-Pro: **86.2%** est. (benchgap, medium confidence); AA MMLU-Pro **90.0%** est.; Vals MMLU-Pro **88.6%** est.
- MMMU-Pro: not reported by vendor; AA lists none (pending)
- MMLU: not reported by vendor (epoch/AA pending)
- BenchLeader category — Reasoning **78**, Knowledge **77**, Maths **71** (BenchLeader)
- AA-Omniscience Accuracy: **58.3%** measured (benchgap)
- SuperGPQA: **100.0%** est. (benchgap, low confidence)
- HLE-Verified: **54.4%** est. (benchgap)

Coding:

- SWE-bench Verified: not reported by vendor; benchgap estimates **100.0%** (low confidence) — treat as unverified
- SWE-bench Pro: not reported by vendor; benchgap estimates **84.6%** (medium confidence)
- DeepSWE: **73.3%** est. (benchgap)
- LiveCodeBench v6: **100.0%** est. (benchgap, low confidence)
- SciCode: **67%** (Epoch AI, measured) / AA-SciCode **64.2%** measured (benchgap)
- AA Coding Index: **78.0** est. (benchgap, high confidence)
- BenchLeader category — Coding **75** (BenchLeader)
- Vals Legal/Finance: Vals Finance Index 67.05%, Vals Legal Index 75.93% (Vals AI)

Long context:

- MRCR v2: **85.7%** est. (benchgap, low confidence)
- AA-LCR: **79.3%** measured (benchgap)
- GraphWalks BFS 256K–1M: **96.2%** measured (LLMBoard, Sugra)
- LongBench v2: **62.0%** est. (benchgap)
- MMLongBench-Doc: **61.4%** est. (benchgap)
- BenchLeader category — Long context **65** (BenchLeader)

Multimodal:

- Chartography (no tools): **72.5%** (Sugra)
- MMMU-Pro: pending (AA lists none)
- OSWorld 2.0: **53.0%** est.; OSWorld 2.1: **79.9%** est. (benchgap)

Cybersecurity (vendor-reported, run without guardrails; not tracked benchmarks):

- SEC-bench Pro: **88.2%** (measured, LLMBoard, Sugra) — #1 of 8
- CWE-bench v1: **71.0%** (measured, LLMBoard, Sugra)
- ExploitGym: **54.8%** (measured, Sugra) / **53.5%** (AA, benchgap)
- CWE-Bench-AA: **61.9%** est. (benchgap)
- DeepsecBench-AA: **39.4%** est. (benchgap)
- CyberGym: **87.9%** est. (benchgap)
- SEC-Bench Pro vendor figure 88.2 (ExploitGym 54.8, CWE-bench 71.0) run without guardrails (AI Model Timeline)

Knowledge work / agents:

- Vending-Bench 2: **$16,484** final balance (#1 of 5) (LLMBoard, Sugra, Epoch)
- Blueprint-Bench 2: **58.6%** / **59%** (LLMBoard, Epoch)
- Legal Research Bench: **55.77%** (#1 of 89) (Vals AI)
- Tax Agent Bench: **51.78%** (#1 of 80) (Vals AI)
- EMB v1.1: **76.47%** (#2 of 37) (Vals AI)
- Finance Agent v2.1: **67.16%** (#5 of 35) (Vals AI)
- HLAB-Vals-1.1: **17.50%** (Vals AI)
- GDP.pdf: **28.4%** measured (benchgap)
- RiemannBench: **80%** (Sugra)
- WebDev Arena: **1,768** points (LLMBoard)
- LM Arena Text: **1,540.04** rating (LLMBoard)
- AA Briefcase v1.1 / AutomationBench-AA: included in AA Intelligence Index v5.0.1

Safety/alignment:

- Terminal-Bench 4.0 cheating attempt rate: **0.4%**; successful cheating rate: **0.0%** (Google blog)
- Gray Swan IPI attack success rate: **0.0%** (Google blog; Argon led at 0.7%)
- High-severity misalignment alerts dropped ~80% vs Argon (Google blog)
- Unsupported claims cut ~2x over Argon (Google blog)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency excluded.

- **Tool use: 82/100.** Strong agentic performance: Terminal-Bench 4.0 63–65%, Vibe Code 89%, Agents' Last Exam 77.4%, OSWorld 2.1 offline 81.5%, AutomationBench 53.9–77.8%, Vending-Bench 2 #1. Capped by pending SWE-bench Verified/Pro (vendor unreported) and low-confidence benchgap estimates.
- **Reasoning: 87/100.** HLE-Diamond 69.1% (reasoning 79.6%) leads the ranking; HLE 60.4–63.8%; GPQA Diamond ~94%; MMLU-Pro ~86–90%; BenchLeader reasoning 78. Capped by HLE below 70% and unknown knowledge cutoff.
- **Context window: 95/100.** 1M-token input / 1M output window (top tier); GraphWalks BFS 96.2% at 256K–1M; AA-LCR 79.3%; but BenchLeader long-context category only 65 and MRCR v2 85.7% est. — retrieval degrades vs. capacity.
- **Multimodal: 86/100.** Text/image/speech/video input with text output; OSWorld 81.5%, Chartography 72.5%; MMMU-Pro pending. Capped by text-only output and pending MMMU-Pro.
- **Coding: 78/100.** Terminal-Bench 4.0 63–65%, Vibe Code 89%, AA Coding Index 78, BenchLeader coding 75, DeepSWE 73.3% est., FrontierCode 2.0 38.6%. Capped by FrontierCode 2.0 (38.6%) and vendor-unreported SWE-bench.
- **Cost efficiency: 42/100.** Paid $4.00/$20.00 per 1M (standard), $2/$10 promotional, $0.20 cached; blended ~$8.00 — expensive (BenchLeader #223 of 246 on price). No free tier.
- **Overall Score: 86/100.** (82 + 87 + 95 + 86 + 78) / 5 = 85.6 → 86. Best fit: frontier cybersecurity + long-horizon agentic coding at premium price; restricted access at launch.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-04
- Method: public internet research (Google blog, Artificial Analysis, Vals AI, Epoch AI, BenchLeader, LLMBoard, benchgap, Sugra, TokenPost, AI Model Timeline); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon — Vals AI](https://www.vals.ai/models/google_gemini-4-carbon)
  - [Gemini 4 Carbon — Epoch AI](https://epoch.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon — BenchLeader](https://www.benchleader.com/models/gemini-4-carbon)
  - [Gemini 4 Carbon — LLMBoard](https://www.llmboard.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon — AI Model Timeline](https://ai-model-timeline.org/models/google-gemini-4-carbon)
  - [Gemini 4 Carbon benchmark scores — Sugra](https://sugra.systems/blog/llm-bench/models/gemini-4-carbon)
  - [Gemini 4 Carbon Scores 69.1% on HLE-Diamond — TokenPost](https://www.tokenpost.com/news/technology/44147)
  - [Gemini 4 Carbon — benchgap](https://benchgap.net/model/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
