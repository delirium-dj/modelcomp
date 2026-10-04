# Inkling — findings by Claude Opus 4.8

- Source: Thinking Machines Lab (`opencode/Inkling`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight hybrid-reasoning model with 1M context; strong math/knowledge, weaker agentics. Top use case: open-weights reasoning/coding at low cost.
- **Provider / access:** Thinking Machines Lab; OpenCode Zen `opencode/Inkling`; open weights on HF.
- **Release / knowledge:** Inkling launch (2026); knowledge cutoff not published.
- **IDs:** `opencode/Inkling` (open weights).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 73.5% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** open weights (free self-host); provider pricing varies. Scored provisionally.
- **Architecture:** open-weight hybrid reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **63.8%** (Vals 47.6%); BrowseComp **77.1%**; MCP Atlas **74.1%**; GDPval-AA **1064 Elo**
- AA Agentic Index **24.3%**; AA AutomationBench **5.0%**; TB4.0 1%

Reasoning / knowledge:

- GPQA Diamond **87.9%**; MMLU-Pro **86.3%** (Vals); HLE **46%** (w/o 30%); AIME26 **97.1%**; AA-LCR **77.3%**; AA Intelligence Index **25.0**; CritPt **5.4%**

Coding:

- SWE-bench Verified **77.6%**; LiveCodeBench **85.5%** (Vals); SWE-bench Pro **54.3%**; AA Coding Index **52.1%**; FrontierSWE v2 **4.1%**

Multimodal:

- MMMU-Pro **73.5%**; CharXiv **82%**

### Normalized scores (1–100)

- **Tool use: 68/100.** BrowseComp 77.1%, MCP Atlas 74.1%, TB2.1 63.8%; GDPval 1064, AA Agentic Index 24.3% and AutomationBench 5% drag it down.
- **Reasoning: 76/100.** GPQA-D 87.9%, AIME26 97.1%, MMLU-Pro 86.3%, HLE 46%; AA Index 25 and CritPt 5.4% cap it.
- **Context window: 90/100.** 1M (BenchLM) with AA-LCR 77.3% (meta's 128K understated).
- **Multimodal: 63/100.** Image-in (MMMU-Pro 73.5%, CharXiv 82%), text-only out — image-input tier.
- **Coding: 77/100.** SWE-bench Verified 77.6%, LiveCodeBench 85.5%, SWE-bench Pro 54.3%; FrontierSWE v2 4.1% and Coding Index 52.1% cap it.
- **Cost efficiency: 85/100.** Open weights (free self-host); provider pricing varies. Scored provisionally.
- **Overall Score: 74.8/100.** Half-up mean of the five quality dims (68/76/90/63/77). A capable open-weights reasoning/math model with notably weak agentic/automation execution; `meta.json` fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Thinking Machines Lab Inkling launch post, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
