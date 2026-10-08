# Inkling — findings by Ling 3.1 Flash

- Source: Thinking Machines Lab (`opencode/Inkling`; API `thinkingmachines/inkling` via Tinker; also Baseten, Together AI, Modal; weights on HuggingFace)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's July-2026 open-weights (Apache 2.0) generalist — 975B-parameter MoE (41B active) pretrained on 45T tokens of text/images/audio/video — with HLE 46.0% (w/tools), GPQA Diamond 87.2%, MCP Atlas 76.0%, BrowseComp 77.1%, SWE-bench Verified 77.6%, VoiceBench 91.4% and a 1M context; a broad, balanced multimodal foundation model rather than a benchmark specialist.
- **Provider / access:** Thinking Machines — Tinker API (64K/256K context options, effort dial 0.2–0.99, 50% launch discount), AI Gateway via Baseten/Together AI/Modal; open weights on HuggingFace (1M context).
- **Release / knowledge:** 2026-07-15; knowledge cutoff not published.
- **IDs:** `opencode/Inkling` / `thinkingmachines/inkling`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window (256K served on Tinker) and takes text, image and audio input.
- **Context window:** 1,048,576 tokens (open weights); 256K max on the Tinker API; 262,144 max output.
- **Modalities:** text, image, audio in; text out.
- **Pricing (as of 2026-10-02):** $1.00/$4.05 per 1M input/output (Tinker, 64K context; blended ~$0.72/M at 7:2:1); AA-reported list $1.87/$4.68 (64K) and $3.74/$9.36 (256K) with cache reads at ~37% of input; 50% launch discount; 160 tok/s; open weights free to self-host.
- **Architecture:** 975B-total/41B-active MoE, 66 layers, each token routed to 6 of 256 experts plus 2 shared experts; local-global attention mix; native hierarchical patch encoder (images) and discrete token encoding (audio, 16kHz WAV); effort control via system message with per-token training cost.

### Raw benchmarks found

All evals at effort=0.99, temperature 1.0; coding evals with a 256K max-token trajectory limit (Thinking Machines launch, 2026-07-15):

Reasoning / knowledge:

- Humanity's Last Exam: **46.0%** with tools / **29.7%** text-only (earlier checkpoint noted)
- GPQA Diamond: **87.2%**; AIME 2026: **97.1%**
- SimpleQA Verified: **43.9%** (weakest area per the vendor — pair with retrieval)
- AA-Omniscience: **+2.1** (40% accuracy, 63% hallucination rate — weak)
- IFBench: **79.8%**; Global-MMLU-Lite: **88.7%**
- AA Intelligence Index: **41** at launch (leading U.S. open-weights release; above Nemotron 3 Ultra's 38, Gemma 4 31B's 29, gpt-oss-120b's 24); **25** on the current AA Index v4.3.2 page (xhigh)

Agentic / tool use:

- MCP Atlas: **76.0%**; Toolathlon Verified: **45.5%**; τ³-Banking: **23.7–24%**
- BrowseComp (w/ context management): **77.1%**
- GDPval-AA v2: **1238 Elo** (above Kimi K2.6's 1190 and DeepSeek V4 Flash max's 1189; below GLM-5.2's 1514, DeepSeek V4 Pro's 1307, GPT-5.6 Sol's 1748, Fable 5's 1760)
- SWE-bench Verified: **77.6%** (bash-only harness; external models self-reported)
- SWE-bench Pro Public: **54.3%**
- Terminal-Bench 2.1: **63.8%** (internal harness; contaminated solutions zeroed)
- Token efficiency: matches Nemotron 3 Ultra on Terminal-Bench 2.1 at ~1/3 the tokens; averages 25K output tokens per Intelligence Index task (vs 43K GLM-5.2 max, 38K Kimi K2.6, 37K DeepSeek V4 Pro max)

Multimodal:

- VoiceBench: **91.4%**; MMAU: **77.2%**; Audio MC: **56.6%**
- MMMU Pro Standard: **73.5%**; CharXiv RQ: **78.1%** (**82.0%** with a Python image-cropping tool)

Safety:

- FORTRESS Adversarial **78.0%** / Benign **95.9%**; StrongREJECT **98.6%**

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP Atlas 76.0% (rank 14/36) and BrowseComp 77.1% (w/ context management) are strong, with LegalBench 82.95% supporting; the independent agentic rows are much weaker than the vendor's launch table — Terminal-Bench 2.1 at 47.57% (Vals, vs 63.8% on Inkling's internal harness), Terminal-Bench 4.0 at 1.01%, AutomationBench-AA at 4.98% (last of 40), AA-AnalystAgent 23.75%, EnterpriseOps-Gym 37.96%, SkillsBench 26.09%, Tax Agent Bench 43.52%, τ³-Banking 23.7–29.1% and Toolathlon Verified 45.5%.
- **Reasoning: 73/100.** GPQA Diamond 87.1% (Vals) / 88.3% (Epoch) and AIME 2026 97.1% support, with HLE 46.0% with tools (vendor) reaching the 40%+ frontier band; HLE text-only 29.7% (31.88% on AA's no-tools read), the AA Intelligence Index (41 at launch, 25 on the current v4.3.2 Index), Vals Index 28.67% (last of 33), AA CritPt 5.43%, SimpleBench 50.0%, SimpleQA Verified 43.9% and AA-Omniscience +2.1 (40% accuracy, 63% hallucination) cap the score.
- **Context window: 92/100.** 1M-token window in the open weights (the Tinker API serves 64K/256K options); no ≥98%-at-depth retrieval figure published.
- **Multimodal: 92/100.** Native text/image/audio input with text output — the audio-in band (90–100); VoiceBench 91.4%, MMAU 77.2% and MMMU Pro 73.5% support.
- **Coding: 71/100.** SWE-bench Verified 77.6% (bash-only harness; rank 21/23 on Vals), SWE-bench Pro V2 Full 89.88% (10 of 10) and HARD 56.90% (10 of 10), and LiveCodeBench 85.52% (rank 14/21) are the strong fills, but Terminal-Bench 2.1 at 47.57% (Vals, vs 63.8% internal), Vibe Code Bench v1.1 at 19.21% (rank 37/38), SciCode 46.99% (rank 39/40), ProgramBench 0.00%, ProofBench 0.00%, IOI 14.94% and Code Migration 11.79% sit well under the frontier bands; matching Nemotron 3 Ultra at ~1/3 the tokens is a documented efficiency plus.
- **Cost efficiency: 89/100.** $1.00/$4.05 per 1M (blended ~$0.72/M at 7:2:1) sits just under the ~$1.25/$4.25≈88 anchor, with 50%-off launch pricing and cache reads at ~37% of input; the 256K Tinker tier costs $3.74/$9.36, and the Apache-2.0 weights are free to self-host.
- **Overall Score: 80/100.** (70+73+92+92+71)/5 = 79.6 → 80 — the leading U.S. open-weights release (HLE 46.0% w/tools, MCP Atlas 76.0%, VoiceBench 91.4%, 1M context, Apache 2.0, SWE-bench Pro V2 Full 89.9%) held back by weak independent agentic rows (TB2.1 47.6% Vals, TB4.0 1.01%, AutomationBench-AA 4.98%) and weak factual recall (SimpleQA 43.9%, AA-Omniscience +2.1).

---

## Update 2026-10-08 (6-day re-research)

AIEvals (51 independent boards), llmboard, Goldie Bench, Epoch and AA v4.3.2 rows found:

- Strong independent fills: SWE-bench Pro V2 Full **89.88%** (10 of 10) and HARD **56.90%** (10 of 10), LiveCodeBench **85.52%** (rank 14/21), SWE-bench Verified 77.60% (rank 21/23), LegalBench 82.95% (rank 26/27), CyberBench v1.1 66.79% (rank 20/31), MedScribe ~85%, AA-LCR v1.1 **77.33%** (fills the long-context retrieval gap — good but under the ≥98% bar), LiveBench math 88.36 / reasoning 78.35 / instruction 70.10
- Weak independent rows (much softer than the vendor's launch table): Terminal-Bench 2.1 **47.57%** (Vals — vs 63.8% on Inkling's internal harness), Terminal-Bench 4.0 **1.01%** (39 of 40), AutomationBench-AA **4.98%** (last of 40), Vibe Code Bench v1.1 **19.21%** (37 of 38), Vibe Code Bench 1–100 7.33%, ProgramBench 0.00%, ProofBench 0.00%, Terminal-Bench Science 0.1 0.00%, IOI 14.94%, Code Migration 11.79%, MLCR-AA 12.22%, SkillsBench 26.09%, EnterpriseOps-Gym-AA 37.96%, Tax Agent Bench 43.52%, SAGE 36.55%, SciCode 46.99% (39 of 40), AA-AnalystAgent 23.75%
- Composites: AA Intelligence Index **25** (current v4.3.2 — vs 41 at launch, the same downward rebase as the rest of the cohort), Vals Index **28.67%** (last of 33), LLMBoard 63.6 (100% coverage, 16 families), Epoch-tracked ARC-AGI 79.5% / ARC-AGI-2 36.5%, AA HLE no-tools 31.88% (46 of 200), AA CritPt 5.43% (47 of 200), GDPval-AA v2.1 1063.67 (40 of 42 — vs 1238 at launch), AA-Briefcase v1.1 833.68 (39 of 41)
- Human-evaluated: Goldie Bench average **6.07/10** across 50 judged one-shot builds (rank #25 of 26, 0 medals; best build Matrix 8.4/10; category averages: Games 5.9, Sims 5.4, Visuals 6.5, Pages 7.3, Other 7.1)
- LMArena Agent rows are negative (−10.86% leaderboard, negative bash-recovery/steerability/outcome scores) — an adverse agentic-harness read worth noting alongside the vendor's 63.8% TB 2.1
- Context note: Vals lists a 256K served window; AA records 1M for its measured configuration (the open weights carry the 1M window)
- **Scores revised**: Tool 74→70 (independent agentic rows far below the vendor table), Reasoning 76→73 (AA Index 25 current, Vals Index last-of-33), Coding 70→71 (SWE-bench Pro V2 89.9% and LiveCodeBench 85.5% fills offset TB/Vibe/ProgramBench weakness); Overall 81→80 ((70+73+92+92+71)/5 = 79.6)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Thinking Machines Inkling launch, Artificial Analysis, Vercel AI Gateway, Sebastian Raschka's architecture notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling.md`, using the same headings.
