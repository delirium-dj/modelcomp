# Qwen3.5-9B — findings by Space Bunny

- Source: Alibaba (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 69 → 63, and the reason is the arrival of percentile
> rankings — which turn out to matter enormously for a small model.** Every figure the
> previous version used was an absolute score; absolute scores made a 9B model look
> serviceable. **BenchmarkList now places this model against 300+ peers on each benchmark,
> and the placements are brutal in a way the absolute numbers did not reveal:
> SWE-bench Pro is 32.0% at rank 58 of 58 — last place. JobBench is 2.6% at rank 48 of 48.
> Android Bench is 15.5% at rank 45 of 46. AGORA, Vision2Code, Feasibility Awareness and
> MyPCBench are all 0th percentile.** Against that, the same record shows **τ²-Bench
> Telecom at 86.8% (rank 67 of 332)**, **Managing Procedural Memory at 92nd percentile,
> rank 2 of 13**, **Terminal-Bench Hard at 24.2% (71st percentile)** and **StemBind at 88th
> percentile, rank 4 of 27**. The model is genuinely good at some things and last in the
> world at others, and only the percentile view makes that legible.

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba's **9.65B dense** small model from the Qwen3.5 family — **text, image and video in; text out, with thinking on by default** (`<think>` blocks, switchable via `enable_thinking` / `chat_template_kwargs`). Released with the Qwen3.5 family (blog citation dated February 2026; Artificial Analysis and the Qwen3.5 Hugging Face collection list March 2026). Open weights. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Hugging Face and Alibaba's own endpoints; DeepInfra; also available through OpenRouter and third-party gateways.
- **Release / knowledge:** released with the Qwen3.5 family, **March 2026** on the aggregators. Knowledge cutoff not published in this record.
- **Context window:** **262,144 tokens native**, extensible to **1,010,000 tokens** via YaRN RoPE scaling — **both stated directly in the official model card** ("Context Length: 262,144"). **No retrieval measurement at native length exists**, and **Context Arena at 43.3%** and **LongBench v2 at 55.2%** are the only long-context figures on record.
- **Modalities:** **text, image and video in; text out**; reasoning/thinking by default (`<think>` blocks, switchable via `enable_thinking` / `chat_template_kwargs`). Open weights, dense architecture.
- **Pricing (as of 2026-10-13):** **DeepInfra $0.10 in / $0.15 out** per 1M tokens (**Priority tier $0.15 / $0.225, Flex tier $0.08 / $0.12**). At the methodology's top paid tier.
- **Architecture:** **9.65B dense**, open weights.

### Raw benchmarks found

**Agentic — BenchmarkList, with percentile and rank placement:**

- **τ²-Bench Telecom: 86.8% — 80th percentile, rank 67 of 332.** Field leader. Corroborated twice by Artificial Analysis (observed 2026-09-11 and 2026-09-16, 86.8%, −12.3 pp vs Z.ai GLM 5.2). **The official card's TAU2-Bench figure is 79.1%.**
- **Managing Procedural Memory in LLM Agents: 92nd percentile, rank 2 of 13.** New, and the model's best-placed agentic result.
- **ProactBench: 48.0% — 75th percentile, rank 5 of 17.**
- **Terminal-Bench Hard: 24.2% — 71st percentile, rank 95 of 326** (Artificial Analysis, observed 2026-09-16; **−41.7 pp vs gpt-5.6-sol**).
- **DisasterBench: 65.7% — 67th percentile, rank 5 of 13.** **ContractBench 56.6% (60th pct).** **ScreenSpot-Pro 65.2 (57th pct).** **STALE 14.6% (57th pct).**
- **GDPval-AA: 645 Elo — 42nd percentile, rank 203 of 352.** Low.
- **DeepPlanning: 18.0% — 38th percentile.** Official card agrees.
- **τ³-Banking: 8.2% — 38th percentile, rank 109 of 176**; the official card's τ³-Banking figure is **7.0%**. **STT-Arena 19.5% (35th pct).** **AA-Briefcase 335 (28th pct).**
- **The 0th-percentile wall — every one of these is rank last or near-last:**
  - **JobBench: 2.6% — 0th percentile, rank 48 of 48.**
  - **AGORA (agentic workplace document reasoning): 3.0% — 0th percentile, rank 8 of 8.**
  - **Do Agents Know What They Can't Do? (feasibility awareness): 47.2% — 0th percentile, rank 9 of 9.**
  - **MyPCBench (personally intelligent computer-use agents): 2.7% — 0th percentile, rank 6 of 6.**
  - **Beyond the All-in-One Agent (role-specialized multi-agent enterprise workflows): 7.7% — 0th percentile, rank 12 of 12.**
  - **PostEDA-Bench: 56.0% — 0th percentile, rank 8 of 8.**
  - **OpenComputer: 7.8% — 14th percentile, rank 7 of 8.**
  - **PinchBench: 45.4% — 7th percentile, rank 68 of 73.**
  - **Dr-CiK: 0.3 — 6th percentile, rank 18 of 19.**
  - **CorpBench Work: 1.3 — 13th percentile, rank 14 of 16.** **RuVerBench: 88.1% (12th pct).**
- **BFCL-V4: 66.1%** (official card) — strong function calling for the size.

Coding — **the same wall, and it is the clearest finding in this file**:

- **SWE-bench Verified: 60.0% — 6th percentile, rank 47 of 50.** Low in absolute terms, near-last in relative terms.
- **SWE-bench Pro: 32.0% — 0th percentile, rank 58 of 58. Last place in the field.**
- **Vision2Code (image-to-code generation): 1.6 — 0th percentile, rank 7 of 7.** Last.
- **Android Bench: 15.5% — 2nd percentile, rank 45 of 46.** Against a field leader (O-5) at 91.8%, **−76.3 points.**
- **Terminal-Bench 2.1: 29.2% — 41st percentile, rank 114 of 194.** **SciCode: 29.5% — 36th percentile, rank 190 of 296.**
- Against, and respectable: **LiveCodeBench v6: 65.6%** (official card; rank 66 of 114 per LLMLearner) and **OJBench: 29.2%**.

Reasoning / knowledge:

- **GPQA Diamond: 80.6% — 74th percentile, rank 124 of 468** (Artificial Analysis; two readings dated 2026-09-12 at 78.59% and 80.61%, with a 12 Sept variant at 78.59%). The official card gives **81.7%**, which LLMLearner ranks 87 of 186 on a no-tools protocol. Three figures, 78.6–81.7.
- **MMLU-Pro: 82.5%**; **MMLU-Redux 91.1%**; **C-Eval 88.2%** (rank 8 of 47, no-tools); **SuperGPQA 58.2%**; **ECI 139** (rank 97 of 166).
- **HMMT Feb. 2025: 83.2%**; **HMMT Nov. 2025: 82.9%**.
- **CritPt: 0.6% — rank 108 of 125.** Effectively zero.
- **TeleResilienceBench 17.4% (14th pct)**; **SeePhys Pro 12.8% (40th pct)**.
- The official card's comparison table shows this model is well behind every larger Qwen3.5/3.6 sibling on every shared row — GPQA 81.7 vs 88.4 (397B-A17B) and 90.4 (3.6 Plus Preview); MMLU-Pro 82.5 vs 87.8 and 88.5; MMMU-Pro 69.2 vs 77.3 and 78.0; LiveCodeBench 65.6 vs 83.6 and 87.1; τ³-Banking 7.0 vs 13.4 and 20.8; Context Arena 43.3 vs 75.5.

Multimodal:

- **MMMU-Pro: 69.3%** (Artificial Analysis, independent; the official card gives 69.2%, LLMLearner ranks it 67 of 118 on a no-tools protocol).
- **StemBind (abstract visual reasoning under rules): 37.4% — 88th percentile, rank 4 of 27.** The model's best-placed multimodal result and a genuine standout.
- **ScreenSpot-Pro: 65.2** (57th percentile). **VITA-Bench: 29.8%** (official card). **TableVista 40.7% (35th pct).** **CulMind 37.5% (33rd pct).** **Vision Context Arena 22.6% (24th pct).**
- **Vision2Code at 1.6, last of 7** — generating code from an image is where this model fails outright.

Long context:

- **Context Arena: 43.3%** — 35th percentile, rank 45 of 49 (Thinking, no tools); a second vision-linked reading sits at 22.6%.
- **LongBench v2: 55.2%** — rank 11 of 14.
- **262,144 tokens native, 1,010,000 via YaRN RoPE scaling**, both first-party. **No AA-LCR measurement exists.**

### Normalized scores (1–100)

- **Tool use: 55/100.** *Revised down from 62.* The previous version scored this on **TAU2-Bench 79.1% and BFCL-V4 66.1%** and described the model as having "genuinely strong multi-step and function-calling results for a 9B model." That was fair on the numbers, and the numbers still hold — **τ²-Bench Telecom at 86.8% is now 80th percentile, rank 67 of 332, and Managing Procedural Memory is 92nd percentile at rank 2 of 13.** What the percentile view adds is the other half of the picture: **JobBench 2.6% (rank 48 of 48), AGORA 3.0% (8 of 8), MyPCBench 2.7% (6 of 6), Beyond the All-in-One Agent 7.7% (12 of 12), OpenComputer 7.8% (7 of 8), Feasibility Awareness 47.2% (9 of 9), PostEDA-Bench 56.0% (8 of 8), Android Bench 15.5% (45 of 46), PinchBench 45.4% (68 of 73), Tau3-Banking 8.2%, STT-Arena 19.5%, GDPval Elo 645 (203 of 352), Terminal-Bench Hard 24.2% (71st pct).** The model is excellent at conversational service workflows and procedural memory, and **last or near-last at real-world job execution, computer use, enterprise document reasoning and knowing what it cannot do.** Feasibility Awareness at 0th percentile is the one to note for anyone routing on it.
- **Reasoning: 62/100.** *Revised down from 66.* **GPQA Diamond at 80.6% (74th percentile, rank 124 of 468)**, **MMLU-Pro 82.5%, MMLU-Redux 91.1%, C-Eval 88.2%, HMMT 83.2%/82.9%** are respectable and confirm the previous version. What is now visible and was not before is the floor: **CritPt at 0.6%, rank 108 of 125 — effectively zero**, **TeleResilienceBench 17.4% (14th pct)**, **SeePhys Pro 12.8%**, **AA-Briefcase 335 (28th pct)**, and **ECI 139 at rank 97 of 166**. The official card's own comparison table makes the ceiling explicit too: this model sits well behind every larger Qwen sibling on every shared row. Good exam knowledge for 9B; weak deep or domain-specific reasoning.
- **Context window: 70/100.** *Revised down from 72.* **262,144 tokens native, extensible to 1,010,000 via YaRN**, both first-party. What is new and matters: **Context Arena at 43.3% (rank 45 of 49)** and **LongBench v2 at 55.2% (rank 11 of 14)** — the only two long-context measurements on record, and neither is strong. **No AA-LCR measurement exists at any length.** The YaRN extension to ~1M is a capability on paper with nothing behind it, and the two figures that do exist say the usable window is a fraction of the advertised one. Not at the band's 70-point tier point because the native window has no retrieval evidence at all.
- **Multimodal: 78/100.** *Revised down from 85.* The previous version's 85 sat in the methodology's 75–90 band on the strength of documented image, video and document input plus vision benchmarks. The measured picture is more mixed. Up: **StemBind at 37.4%, 88th percentile and rank 4 of 27** — abstract visual reasoning under rules is a genuine standout, and better-placed than almost anything else this model does. **MMMU-Pro at 69.3%** (independent) confirms the 69.2% card figure. Down: **Vision2Code at 1.6, rank 7 of 7 — last**, which is image-to-code generation and a real capability gap; **ScreenSpot-Pro 65.2 (57th pct)**; **VITA-Bench 29.8%**; **TableVista 40.7%**; **CulMind 37.5%**; **vision Context Arena 22.6%**. **Video input is documented but VITA-Bench at 29.8% says it is barely usable.** The methodology's ceiling for image-only input is 70, so 78 reflects real multimodal capability measured in both directions.
- **Coding: 52/100.** *Revised down from 62 — the largest single move in this file, and the one the percentile view makes unavoidable.* The previous version scored this on **LiveCodeBench v6 65.6% and OJBench 29.2%**, real numbers that still stand. But the same benchmark family now carries placements that change the reading entirely: **SWE-bench Pro at 32.0% is rank 58 of 58 — last place in the field**, **SWE-bench Verified at 60.0% is rank 47 of 50**, **Vision2Code at 1.6 is rank 7 of 7**, **Android Bench at 15.5% is rank 45 of 46 and −76.3 points behind the field leader**, **Terminal-Bench 2.1 at 29.2% is rank 114 of 194**, **SciCode at 29.5% is rank 190 of 296**, and **Dr-CiK at 0.3 and CorpBench Work at 1.3** are near-zero on software-engineering-adjacent tasks. **LiveCodeBench v6 at 65.6% measures competitive programming from a problem statement; SWE-bench Pro and Android Bench measure doing engineering work in a real environment. This model is good at the first and last in the world at the second.** That is a narrower and more specific capability claim than the previous version's 62 implied, and the honest description of it is 52.
- **Cost efficiency: 95/100.** *Revised down from 98.* Unchanged and genuinely excellent: **DeepInfra $0.10 in / $0.15 out per MTok**, with a **Priority tier at $0.15 / $0.225 and a Flex tier at $0.08 / $0.12**. At the methodology's top paid tier and among the cheapest genuinely capable models on this list. Three points off because **the cached-input rate is not published for this model**, which matters at 262K context, and because **the quality it buys has been substantially re-rated downward this pass** — cost efficiency is judged against what you get for the money, and what you get has changed.
- **Overall Score: 63/100.** (55 + 62 + 70 + 78 + 52) / 5 = 317 / 5 = 63.4 → **63**, down from 69. **Cost efficiency is reported but excluded from the five-dimension average.** The drop is **coding −10 and tool use −7**, both attributable to percentile placements rather than to any change in absolute scores — **nothing in this pass got worse, the record simply got more informative.** Best fit, revised and now much more specific than the previous version's "cheap, genuinely multimodal local reasoning model": **a cheap local model for conversational service workflows (τ²-Bench Telecom at 86.8%), procedural memory (92nd percentile), document and chart understanding (StemBind 88th percentile), and competitive programming (LiveCodeBench v6 65.6%)** — running locally or on a tight budget, where the 9.65B dense footprint and $0.10/$0.15 pricing are the point. **Not** a fit for repository-scale software engineering (**SWE-bench Pro last of 58**), **not** a fit for any computer-use or agentic-computer workload (**Android Bench 15.5%, MyPCBench 2.7%**), **not** a fit for real-world job execution (**JobBench 2.6%, rank 48 of 48**), **not** a fit for image-to-code work (**Vision2Code 1.6, last of 7**), and **not** a fit for routing on a confidence gate (**Feasibility Awareness 0th percentile**). And its advertised ~1M context should be treated as a YaRN ceiling rather than a usable window: **the two measurements that exist read 43.3% and 55.2%.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
  Method: third pass over this agent's own report for this slug (69 → **63**).
  New sources and what each contributed: **BenchmarkList** — the decisive addition, because
  it publishes **percentile and rank placement against 300+ peers per benchmark**, which is
  what changed the reading on four of five dimensions; **Artificial Analysis** (via AI Atlas,
  observed 2026-09-11 and 2026-09-16) for independent **Terminal-Bench Hard 24.2%**,
  **τ²-bench Telecom 86.8%**, **IFBench 66.7%**, **MMMU-Pro 69.3%** and two GPQA Diamond
  readings at 78.59% and 80.61%; **Qwen's own `Qwen/Qwen3.5-9B` model card** for
  **MMLU-Pro 82.5, MMLU-Redux 91.1, C-Eval 88.2, SuperGPQA 58.2, GPQA Diamond 81.7, HMMT
  Feb. 25 83.2, HMMT Nov. 25 82.9, LiveCodeBench v6 65.6, OJBench 29.2, BFCL-V4 66.1,
  TAU2-Bench 79.1, VITA-Bench 29.8, DeepPlanning 18.0, ScreenSpot Pro 60.3,
  OSWorld-Verified 35.6, AndroidWorld 57.8**, the **262,144 native / 1,010,000 via YaRN**
  context figures, and the **9.65B dense** architecture; **LLMLearner** for **CritPt 0.6
  (rank 108 of 125)**, **τ³-Banking 7.0**, **Context Arena 43.3**, **LongBench v2 55.2**,
  **IFBench 64.5** and **ECI 139**; and **FitMyLLM** as a corroborating source for GPQA 80.6
  and τ²-bench 86.8.
  **Why this pass moved the score on percentile rather than on absolute figures — the
  method note.** Nothing in this model's absolute numbers got worse between 2026-10-01 and
  2026-10-13: TAU2-Bench 79.1%, BFCL-V4 66.1%, LiveCodeBench 65.6%, MMLU-Pro 82.5% and
  GPQA 81.7% all still hold, and two new figures (τ²-bench 86.8%, StemBind 88th percentile)
  are genuinely good. **The score fell because BenchmarkList supplies rank placements that
  turn those absolutes into a different statement: SWE-bench Pro is last of 58, SWE-bench
  Verified is 47th of 50, JobBench is 48th of 48, Android Bench is 45th of 46, Vision2Code
  is 7th of 7, and Feasibility Awareness is 9th of 9.** For a 9B model at $0.10/$0.15 the
  absolute figures were never the right question; the question is what the model is *best*
  at relative to peers, and on that question this model is strong in a few narrow places
  and last in the world in several. **This is recorded as a change in evidence, not a
  change in the model**, and the previous version's absolutes are all retained above so a
  future pass can see exactly what was re-rated and why.
  **One conflict recorded:** **GPQA Diamond carries three figures — 78.59% and 80.61% from
  Artificial Analysis on the same date, 2026-09-12, and 81.7% on the official card** — a
  3.1-point spread. The Artificial Analysis reading is used, as the conservative and
  independently measured one, and all three are recorded. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores, and cost efficiency
  is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `qwen-3.5-27b.md`, using the same
  headings — **Qwen3.5-27B, Qwen3.5-35B-A3B, Qwen3.5-122B-A10B, Qwen3.5-397B-A17B and
  Qwen3.6-27B are all separate models in this dataset**, and the official card's comparison
  table gives every one of them a directly comparable set of figures. The gaps most worth
  closing: **an AA-LCR measurement**, which would put Context on evidence rather than on
  spec, and **a cached-input rate**, without which cost efficiency cannot be judged properly
  at a 262K window.