# Gemini 4 Argon — findings by Claude Opus 4.8

- Source: Google (`opencode/gemini-4-argon`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's new Gemini 4 flagship — frontier reasoning and agentic model that re-enters Google into the top tier of intelligence at a discounted cost per task. Top use case: frontier agentic/coding and multimodal reasoning.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-argon`; Google Gemini API. Gemini API.
- **Release / knowledge:** 2026-09-30 (per Artificial Analysis launch coverage); knowledge cutoff not published.
- **IDs:** `opencode/gemini-4-argon`.
- **Context window:** curated `meta.json` lists 128K total, but GraphWalks is reported at 256K–1M (84.2%) and BFS 128K at 99.7% — **meta.json "128K total" is understated vs. the ≥1M evidence; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out, but LVBench 91.7% (video) and Chartography evidence image+video input — **meta.json "Text in/out" appears understated; flag for verification.**
- **Pricing (as of 2026-10-03):** no exact public price verified; AA launch coverage notes Argon matches GPT-6 Astra "at 60% of the Cost per Task with discounted prices." Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (AA 77.5%); Finance Agent v2: **65.4%**; OSWorld 2.0: **69.2%**
- Terminal-Bench 4.0: **57.4%** (AA 57.1%); Agents' Last Exam: **39.5%**; GDPval-AA **1611 Elo** (AA-normalized 55.6%); AA Briefcase **1494 Elo**

Reasoning / knowledge:

- AA Intelligence Index: **52.6**; AA-HLE **57.1%**; LABBench2 **88.8%**
- GraphWalks BFS 128K **99.7%** / 256K–1M **84.2%**; AA-LCR **79.7%**; CritPt **27.1%**
- AA-Omniscience Index **42.4%** / Accuracy **49.9%** / **Hallucination Rate 15.1%** (class-leading honesty)

Coding:

- DeepSWE **77.9%**; Vibe Code Bench **91.9%**; FrontierSWE v2 **55.0%**; AA-SciCode **61.8%**; PostTrainBench v1.1 **45.3%**

Multimodal:

- LVBench **91.7%** (video); Chartography (no tools) **71.6%**

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval 1611, OSWorld 69.2%, AA-AutomationBench 77.5%, TB4.0 57.4%, Finance Agent 65.4%; Agents' Last Exam 39.5% is the soft spot.
- **Reasoning: 87/100.** AA Index 52.6, AA-HLE 57.1%, LABBench2 88.8%, GraphWalks 128K 99.7%; standout 15.1% hallucination rate (most honest tier). CritPt 27.1% caps it.
- **Context window: 95/100.** GraphWalks to 256K–1M at 84.2% evidences a ≥1M window (meta's 128K is understated); scored on the verified long-context evidence.
- **Multimodal: 90/100.** Video+image in (LVBench 91.7%), text out — full Gemini multimodal input.
- **Coding: 89/100.** DeepSWE 77.9%, Vibe Code Bench 91.9%, FrontierSWE v2 55%, SciCode 61.8%.
- **Cost efficiency: 65/100.** No exact public price verified; launched at a discount (~60% of GPT-6 Astra's cost/task). Scored provisionally.
- **Overall Score: 89.6/100.** Half-up mean of the five quality dims (87/87/95/90/89). A frontier agentic/coding + multimodal model with class-leading honesty; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google Gemini 4 Argon evals methodology + launch blog, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
