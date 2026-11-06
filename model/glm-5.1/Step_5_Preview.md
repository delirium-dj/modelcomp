# GLM-5.1 — findings by Step 5 Preview

- Source: Z.ai / Zhipu (`glm-5.1`, weights `zai-org/GLM-5.1`)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 — Z.ai's **coding-first flagship** (the roster's `glm-5.1-coding` entry), the generation between GLM-5 and GLM-5.2. **A negative finding governs this report: BenchLM carries no `glm-5.1` page in any spelling** (`glm-5.1`, `glm-5-1` and `GLM-5.1` all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** **The long-horizon agentic-coding open model of spring 2026** — **8-hour autonomous task execution and SWE-Pro-leading coding at a third of Opus pricing**: **SWE-bench Pro 58.4 (open-weights SOTA at launch), SWE-bench Verified 74.2–76.4% (Epoch/Vals), Terminal-Bench 2.0 63.5–69.0, CyberGym 68.7, MCP-Atlas 71.8, τ³-Bench 70.6, GPQA-Diamond 86.2–89.9%, AIME 2026 95.3%, HLE 30.1% (52.3% with tools)** — **superseded by GLM-5.2/5.3 and text-only.**
- **Provider / access:** **Open weights (MIT)** on Hugging Face / ModelScope; Z.ai API; **OpenRouter via 6 providers** (AA count, re-confirmed 2026-10-19).
- **Release / knowledge:** **2026-04-07** (re-confirmed on AA). **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/glm-5.1` (repo id); `zai-org/GLM-5.1` (Hugging Face).
- **Context window:** **200K tokens (202,752 per OpenRouter; AA lists 200k); up to 128K max output** — **it predates GLM-5.2's verified 1M-context capability**, which is the binding constraint on this model's current standing.
- **Modalities:** **text in → text out** (text-only; AA independently confirms no image input); **configurable extended reasoning.**
- **Pricing (as of 2026-11-06):** **Z.ai list $1.40/M input, $4.40/M output, $0.26 cache read**; **AA's independent measurement: $1.285/$4.07 per MTok (blended $0.85, ~$1.02 per Index task, 80% cache discount)** — **both figures agree within harness variance**; MIT weights free to self-host.
- **Architecture:** **MoE 744B total / 40B active** (inherited from GLM-5, re-confirmed on AA), **DSA sparse attention.**
- **Speed:** **68.0 output tokens/s and 1.71 s TTFT** (median across providers) — **slower than its class average; somewhat verbose (140M output tokens on the Index).**

### Raw benchmarks found

**A provenance finding is recorded and is this model's strongest evidential property: the evidence base is unusually multi-sourced for a BenchLM-absent model — Z.ai's own card and eval tables, Artificial Analysis, Epoch AI, Vals AI, Inference Hub and Design Arena all carry independent runs**, and several figures therefore exist in two or three competing runs that can be compared side by side.

Coding — **the strongest dimension, and the best-crosschecked**:

- **SWE-bench Pro: 58.4** (GLM-5 55.1, GPT-5.4 57.7, Opus 4.6 57.3, Gemini 3.1 Pro 54.2) — **open-weights SOTA at launch**
- **Epoch AI: SWE-bench Verified 74.2%** / **Vals AI: SWE-bench 76.4%** — **two independent runs of the same benchmark, recorded side by side rather than averaged** (a 2.2-point spread)
- **LiveCodeBench: 81.4%** [Vals AI]
- **Terminal-Bench 2.0 (Terminus-2): 63.5** (69.0 best self-reported harness; 66.5 with Claude Code) — **three harness runs, recorded side by side**
- **TB 2.1: 56.9** [Vals AI] / 61.8; **CyberGym: 68.7** (GLM-5 48.3); **NL2Repo: 42.7**
- **Vibe Code Bench: 31.5**; **ProgramBench: 0.0**; **Vals Index: 52.5** [Vals AI]
- **Inference Hub: 45.3 coding-leaderboard score with Claude Code harness (Opus 4.6: 47.9 — 94.6% of Opus)**
- **Design Arena: 1,194–1,336 Elo across code/3D/dataviz/game-dev categories**
- **SciCode: 44.8%**

Agentic / tool use — **solid upper-mid, capped by two near-floor rows**:

- **MCP-Atlas public: 71.8**; **τ³-Bench: 70.6**; **AA's τ²-Telecom: 97.7%** — solid upper-mid tool use
- **BrowseComp: 68.0** (79.3 with context management); **Tool-Decathlon: 40.7**
- **τ-Banking: 13.6%**; **GDPval-AA: 31.0%**; **AA Agentic Index: 23.9%**
- **Vending Bench 2: $5,634.41** (GLM-5 $4,432; Opus 4.6 $8,017) — **an economic-agent benchmark, the only one of its kind in this research series**
- **No verified public score found** for OSWorld, Toolathlon, Claw-Eval or JobBench

Reasoning / knowledge — **upper-mid, with the family reliability cap**:

- **GPQA-Diamond: 86.2** (Epoch AI independently reports **89.9%** — **two runs recorded side by side**)
- **AIME 2026: 95.3%; HMMT Nov 25 94.0 / Feb 26 82.6; IMO-AnswerBench 83.8; OTIS Mock AIME 93.3%** [Epoch]
- **HLE: 31.0 (31.1 on AA); HLE w/ tools: 52.3**
- **MMLU-Pro: 86.9%**; **SimpleQA Verified: 34.0%** [Epoch]; **FrontierMath v1: 56.7%** [Epoch]
- **CritPt: 4.6%** — near-floor, and the family cap
- **AA composites (2026-10-19 re-run, deprecated listing): Intelligence Index 26 (#27/121 in its class, above the class median of 19)**
- **No verified public score found** for ARC-AGI, MRCR or AA-Omniscience

### Normalized scores (1–100)

- **Tool use: 68/100.** Mid-band, and well-crosschecked. **MCP-Atlas 71.8, τ³-Bench 70.6 and AA's τ²-Telecom 97.7% are solid upper-mid tool use**, with BrowseComp 68.0 rising to 79.3 with context management. Held below the frontier band by **Tool-Decathlon 40.7, τ-Banking 13.6%, GDPval-AA 31.0% and the AA Agentic Index 23.9%**, and by **Opus 4.6's MCP-Atlas 73.8 being only +2 points while Tool-Decathlon is 47.2 points ahead** — a visible harness sensitivity that caps the score. **No OSWorld, Toolathlon, Claw-Eval or JobBench figure exists**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 74/100.** Mid-band. **GPQA-Diamond 86.2–89.3%, AIME 2026 95.3%, HLE 30.1% (52.3% with tools) and MMLU-Pro 86.9%** are upper-mid — **the strongest open-weights reasoning of its spring-2026 moment** — corroborated by **OTIS Mock AIME 93.3% and HMMT 94.0/82.6** on Epoch's independent runs. Held below the frontier tier by **CritPt 4.6% near-floor and SimpleQA Verified 34.0%**, and by **the total absence of ARC-AGI, MRCR and AA-Omniscience** — so composite depth and reliability are partly unknown. **The AA Intelligence Index 26 (#27/121, above its class median of 19)** corroborates the mid-upper reading.
- **Context window: 76/100.** **200K tokens (202,752 per OpenRouter) with up to 128K max output** is the methodology's 200K–500K band (65–84), near its top on **AA-LCR 73.7%** — and **the BrowseComp rise from 68.0 to 79.3 with context management is direct evidence the window is usable at depth**, not merely nominal. Held at 76 rather than the band ceiling by **the absence of MRCR or RULER figures** and by **the fact that it predates GLM-5.2's verified 1M-context capability**, which is the binding constraint on this model's current standing.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20); **AA independently confirms no image input.** **A sibling non-import is recorded: vision lives in the separate GLM-5.3-Flash MCP stack, named as the comparison point and explicitly not merged into this SKU's multimodal score.**
- **Coding: 74/100.** Mid-band's top, and the strongest dimension — **the best-crosschecked dimension in the file**: **SWE-bench Pro 58.4% (open-weights SOTA at launch), SWE-V 74.2–76.4% (Epoch/Vals, two runs recorded side by side), Terminal-Bench 2.0 63.5–69.0 across three harnesses, CyberGym 68.7%** and **94.6% of Opus 4.6's Inference Hub coding-leaderboard score through the Claude Code harness**. Held below the frontier band by **TB 2.1 61.8%, SciCode 44.8% and Vibe Code Bench 31.5%**, which show the remaining gap — **8-hour autonomy is proven by demos, not benchmarks** — and by the **absence of DeepSWE and the AA Coding Index**, so two of three coding references are unmeasured.
- **Cost efficiency: 88/100.** **$1.40/$4.40 list (AA independently measures $1.285/$4.07) with $0.26 cache reads** maps to the methodology's ~$1.25/$4.25 → 88 point — **80–87% cheaper than Opus 4.6 at 94% of its coding score**, which is the model's core value claim. Held at 88 rather than higher because **$1.285–1.40/$4.07–4.40 is a premium metered rate**; the MIT self-host route is the escape, but a 744B/40B MoE is expensive to host. **The 68.0 tok/s throughput against a class average above it and the 140M output tokens per Index run (verbose)** are recorded as efficiency drags.
- **Overall Score: 61/100.** (68 + 74 + 76 + 12 + 74) / 5 = 60.8 → **61** → **61**. **A disagreement is recorded rather than reconciled: the repo queue carries 70.2 for this slug while this report reads 61**, and with BenchLM absent there is no third instrument to arbitrate — the queue figure is the corpus-average of other research agents' raters, this report is Step 5 Preview's own normalized reading, and both are stated side by side rather than flattened. Recommendation: **the long-horizon agentic-coding open model of spring 2026** — 8-hour autonomous task execution and SWE-Pro-leading coding at a third of Opus pricing, MIT-licensed, with the best cross-harness coding evidence in this batch. Three cautions: **superseded by GLM-5.2/5.3**, so it is a legacy SKU whose 200K window now predates the family's verified 1M capability; **text-only**, with vision living in the separate GLM-5.3-Flash MCP stack; and **its cost score is its weakest structural point** — the ~$1.25/$4.25 metered rate is premium even at 94% of Opus's coding score, and the MIT self-host escape is expensive at 744B/40B.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `glm-5.1` page in any spelling** (`glm-5.1`, `glm-5-1` and `GLM-5.1` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **A provenance finding is recorded and is this model's strongest evidential property: the evidence base is unusually multi-sourced for a BenchLM-absent model — Z.ai's own card and eval tables, Artificial Analysis, Epoch AI, Vals AI, Inference Hub and Design Arena all carry independent runs**, so several figures exist in two or three competing runs that can be compared side by side, and **three sets of competing runs are recorded side by side rather than averaged**: SWE-bench Verified at 74.2% (Epoch) against 76.4% (Vals), a 2.2-point spread; GPQA-Diamond at 86.2 against 89.9% (Epoch), a 3.7-point spread; and Terminal-Bench 2.0 at 63.5 (Terminus-2) against 69.0 (best self-reported harness) and 66.5 (with Claude Code), three harness runs. In each case the spread is itself the finding, because it quantifies harness sensitivity — the same reason the tool-use score is capped at 68 despite MCP-Atlas 71.8 and τ²-Telecom 97.7%, given Tool-Decathlon is 47.2 points behind Opus 4.6. **The BrowseComp rise from 68.0 to 79.3 with context management is attributed as direct evidence the 200K window is usable at depth** rather than merely nominal, and is the reason the context score reaches 76. **The 200K window's obsolescence within its own family is surfaced as the model's binding constraint**: it predates GLM-5.2's verified 1M-context capability, which is why the model is characterised as superseded. **The Vending Bench 2 economic-agent figure ($5,634.41 against GLM-5's $4,432 and Opus 4.6's $8,017) is attributed as the only economic-agent benchmark row in this research series**, and the **Inference Hub 94.6%-of-Opus figure** as the clearest single coding comparison. **A sibling non-import is recorded: vision lives in the separate GLM-5.3-Flash MCP stack**, named as the comparison point and explicitly not merged into this SKU's multimodal score. **The two pricing runs are recorded as agreeing within harness variance** ($1.40/$4.40 Z.ai list against AA's independently measured $1.285/$4.07), which is unusually strong cost cross-verification for this series, and the **68.0 tok/s throughput and 140M output tokens per Index run** as efficiency drags. **A model-difference is recorded rather than resolved: the repo queue carries 70.2 while this report reads 61, with BenchLM absent so no third instrument exists to arbitrate.** Missing benchmarks (OSWorld, Toolathlon, Claw-Eval, JobBench, ARC-AGI, MRCR, AA-Omniscience, DeepSWE, AA Coding Index, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-5.1 model card (MIT weights, MoE 744B/40B, DSA sparse attention, official eval tables)](https://huggingface.co/zai-org/GLM-5.1)
  - [Artificial Analysis — GLM-5.1 (independent $1.285/$4.07 measurement, 200K, 68.0 tok/s, composites)](https://artificialanalysis.ai/models/glm-5.1)
  - [Epoch AI — GLM-5.1 (SWE-V 74.2%, GPQA-Diamond 89.9%, SimpleQA 34.0%, FrontierMath v1 56.7%, OTIS Mock AIME 93.3%)](https://epoch.ai/)
  - [Vals AI — GLM-5.1 (SWE-bench 76.4%, LiveCodeBench 81.4%, TB 2.1 56.9%, Vibe Code Bench 31.5%, Vals Index 52.5)](https://www.vals.ai/models/ant_glm-5.1)
  - [Inference Hub — GLM-5.1 coding leaderboard with Claude Code harness (45.3 against Opus 4.6's 47.9)](https://inferencehub.ai/)
  - [Design Arena — GLM-5.1 Elo across code/3D/dataviz/game-dev (1,194–1,336)](https://designarena.ai/)
  - [OpenRouter — GLM-5.1 via 6 providers (202,752 context)](https://openrouter.ai/z-ai/glm-5.1)
  - [Repo curated meta — `model/glm-5.1/meta.json` (202,752/128K, text-only, $1.40/$4.40, MIT)](/model/glm-5.1/meta.json)
  - See also: [`model/glm-5/`](glm-5.md) (54.59) — the predecessor refreshed in this same batch; [`model/glm-5.2/`](glm-5.2.md) and [`model/glm-5.3/`](glm-5.3.md) — the successors this report is superseded by, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GLM_5_3.md`, using the same headings.
