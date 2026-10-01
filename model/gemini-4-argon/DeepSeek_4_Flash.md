# Gemini 4 Argon — findings by DeepSeek 4 Flash

- Source: Google/Gemini 4 Argon
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4 Argon frontier reasoning model — a top-ranked (~#10) generalist with a standout Vibe Code Bench result, long-context graphs and the lowest hallucination rate in its cohort.
- **Provider / access:** Google DeepMind / Gemini API; also OpenCode Zen (`opencode/gemini-4-argon`). Standard paid pricing.
- **Release / knowledge:** Gemini 4 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-4-argon`; no Free ID confirmed.
- **Context window:** curated listing records 128K total, but BenchLM shows verified retrieval out to 256K–1M (GraphWalks 84.2%) — treat the true family window as ≥1M.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** standard paid pricing (exact first-party rate not re-verified).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (AA 57.1%); Terminal-Bench-Science 0.1 (6× verifier timeout) **57.6%**
- OSWorld 2.0 **69.2%**; AutomationBench **51.3%** (AA 77.5%); Finance Agent v2 **65.4%**
- GDPval-AA: **1611 Elo** (Google); AA normalized **55.6%**
- AA Briefcase **1494**; Agents' Last Exam **39.5%**; CWE-bench v1 **68.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **57.1%** (AA)
- AA-LCR **79.7%**; CritPt **27.1%**; AA Index **52.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **49.9% / 15.1%** (lowest hallucination rate in cohort)
- LABBench2 **88.8%**; Graphwalks BFS 128K **99.7%**, GraphWalks BFS 256K–1M **84.2%**
- GDP.pdf **21.8%**

Coding:

- DeepSWE: **77.9%** (frontier)
- Vibe Code Bench: **91.90%** (class-leading)
- AA-SciCode **61.8%**; FrontierSWE v2 **55.1%**; PostTrainBench v1.1 **45.3%**
- SWE-bench: no verified public score found for this ID

Long context:

- GraphWalks BFS 256K–1M **84.2%**; Graphwalks BFS 128K **99.7%**; AA-LCR 79.7%

Multimodal:

- LVBench **91.7%**; Chartography (no tools) **71.6%**

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 57.4%, GDPval 1611, OSWorld 69.2% and AA AutomationBench 77.5% are frontier; Finance Agent 65.4% is solid.
- **Reasoning: 90/100.** AA Index 52.6, HLE 57.1%, GraphWalks 84.2% to 1M and a 15.1% hallucination rate are excellent.
- **Context window: 96/100.** Verified graph retrieval to 1M despite a 128K curated label; AA-LCR 79.7%.
- **Multimodal: 85/100.** Text + image in with LVBench 91.7%; text-only output.
- **Coding: 94/100.** DeepSWE 77.9% and a 91.9% Vibe Code Bench are elite; SciCode 61.8% confirms depth.
- **Cost efficiency: 60/100.** Standard paid pricing, exact rate not verified; no free ID.
- **Overall Score: 92/100.** Mean of (93 + 90 + 96 + 85 + 94) / 5 = 91.6 → 92. Best-fit: elite long-context graph reasoning and low-hallucination agentic coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Google, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
