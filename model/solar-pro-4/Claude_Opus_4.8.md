# Solar Pro 4 — findings by Claude Opus 4.8

- Source: Upstage (`upstageai/solar-pro-4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's Solar Pro 4 reasoning model (Korea), 512K context, strong Korean + solid coding; text-only. Top use case: Korean/English reasoning and coding.
- **Provider / access:** Upstage API; OpenCode Zen `upstageai/solar-pro-4`. No Zen Free ID.
- **Release / knowledge:** Solar Pro 4 (2026); knowledge cutoff not published.
- **IDs:** `upstageai/solar-pro-4`.
- **Context window:** curated `meta.json` lists "Unknown"; BenchLM/Upstage report **512K** — **meta.json should be filled (512K).**
- **Modalities:** `meta.json` lists "Unknown"; no multimodal benchmarks reported → **text in/out (reasoning); flag meta for update.**
- **Pricing (as of 2026-10-03):** `meta.json` "Unknown"; no verified public price found. Scored provisionally.
- **Architecture:** proprietary (Upstage).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **61.4%**; Terminal-Bench 2.1 **57.0%**; BrowseComp **49.2%**; APEX-Agents **18.7%**

Reasoning / knowledge:

- GPQA Diamond **89.0%** (AA 89.1%); MMLU-Pro **86.3%**; AIME26 **95.3%**; AA-LCR **71.0%**; AA Intelligence Index **28.1**; CritPt 5.4%; KMMLU-Pro **79.2%**

Coding:

- SWE-bench Verified **70.6%**; LiveCodeBench **87.8%**; AA-SciCode **44.6%**; Terminal-Bench 2.1 **57.0%**

Multimodal:

- No multimodal benchmarks reported (text-only)

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 61.4%, TB2.1 57%, BrowseComp 49.2%; APEX-Agents 18.7% caps it.
- **Reasoning: 70/100.** GPQA-D 89%, MMLU-Pro 86.3%, AIME26 95.3%, AA-LCR 71%; AA Index 28.1 and CritPt 5.4% cap it.
- **Context window: 88/100.** 512K (the 500K–1M tier) with AA-LCR 71%.
- **Multimodal: 15/100.** Text-only in/out (no multimodal benchmarks).
- **Coding: 72/100.** SWE-bench Verified 70.6%, LiveCodeBench 87.8%, SciCode 44.6%.
- **Cost efficiency: 60/100.** No verified public price. Scored provisionally.
- **Overall Score: 61.4/100.** Half-up mean of the five quality dims (62/70/88/15/72). A strong Korean/English reasoning+coding model; text-only caps Overall, and `meta.json` should be filled (512K, text-only, reasoning).

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Upstage Solar Pro 4 launch post, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
