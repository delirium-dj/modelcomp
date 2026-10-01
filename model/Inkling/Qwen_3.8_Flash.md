# Inkling — findings by Qwen 3.8 Flash

- Source: Thinking Machines Lab / Inkling (`opencode/Inkling`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (base)
- **Short description:** Thinking Machines Lab's first from-scratch **open-weights** model (released 2026-07-15): a 975B-parameter MoE (41B active) with a 1M context, text+image+audio input, and "controllable thinking effort" (Hybrid reasoning). On BenchLM it is mid-pack (47/618 rows; 54.78/100, #69 of 645): solid on SWE-bench Verified (77.6%), LiveCodeBench Vals (85.5%), AIME26 (97.1%) and GPQA (87.9%), but weak on real-world autonomy (GDPval-AA 28.2%, AA Agentic Index 24.3%, AutomationBench 5.0%) with a 67.7% hallucination rate.
- **Provider / access:** Open weights (self-host); hosted via OpenCode (`opencode/Inkling`), OpenRouter (`thinkingmachines/inkling`), Artificial Analysis. Tool calls; multimodal input.
- **Release / knowledge:** 2026-07-15; knowledge cutoff not disclosed.
- **IDs:** `opencode/Inkling` / OpenRouter `thinkingmachines/inkling`.
- **Context window:** BenchLM and the launch post list **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M.
- **Modalities:** Text + image + audio in; text out (curated `meta.json` "Text in/out" is a stub; corrected). Hybrid reasoning + tool calls.
- **Pricing (as of 2026-10-02):** Open weights — free to self-host; hosted pricing varies by provider. Curated `meta.json` "Standard pricing" is a stub.
- **Architecture:** 975B-total / 41B-active sparse MoE, open weights, controllable thinking effort.

### Raw benchmarks found

> Independently verified against BenchLM (47 of 618 rows; 54.78/100, #69 of 645, Hybrid-reasoning, Open Weight), citing the Thinking Machines Lab Inkling launch post, Artificial Analysis, Vals AI, Design Arena, Collinear (CWE-bench), Proximal (FrontierSWE) and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- Terminal-Bench 2.1 **63.8%** (Vals 47.6, AA 55.1); BrowseComp **77.1%**; MCP Atlas 74.1%; Design Arena Agentic Web Dev 1257
- weak autonomy: GDPval-AA **1064 / 28.2%**, AA Agentic Index 24.3%, AA Tau3 Banking 29.1%, AA AutomationBench **5.0%**, AA Terminal-Bench 4.0 **1.0%**, AA-AnalystAgent 23.8%, GDP.pdf 12.8%

Coding:

- SWE-bench Verified **77.6%** (Vals 77.6); LiveCodeBench (Vals) **85.5%**; but SWE-bench Pro 54.3%, AA-SciCode 47.0%, AA Coding Index **52.1%** (under 70 bar), FrontierSWE v2 4.1%, CWE-bench v1 37.0%

Reasoning / knowledge:

- GPQA **87.9%** (AA-GPQA Diamond 87.2, Vals 87.1 — at the bar); HLE 46% w/tools but 30% w/o tools, AA-HLE **31.9%** (under 40 bar); MMLU-Pro (Vals) 86.3
- AA Intelligence Index **25.0** (low); CritPt 5.4%; MLCR-AA 12.2%; AA-LCR 77.3
- AA-Omniscience Index 2.0 / Accuracy 41.6% / **Hallucination 67.7%** (severe)

Multimodal / long context:

- MMMU-Pro 73.5 / AA-MMMU-Pro 73.5; CharXiv **82** (78.1 w/o tools); Design Arena Website 1229; audio input supported
- 1M window; AA-LCR 77.3 supportive (no ≥98% MRCR at 512K+ reported)

Instruction / math:

- IFBench 79.8; AIME26 **97.1%**

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** Terminal-Bench 2.1 63.8%, BrowseComp 77.1% and MCP Atlas 74.1% are respectable, but real-world professional autonomy is thin — GDPval-AA 28.2% (1064), AA Agentic Index 24.3%, AutomationBench 5.0% and Terminal-Bench 4.0 1.0% all read weak, capping this below the strong-tool band.
- **Reasoning: 62/100.** GPQA 87.9% sits right at the bar and AIME26 97.1% is excellent, but AA-HLE 31.9% is under the 40 bar, Intelligence Index 25.0 and CritPt 5.4% are low, and a 67.7% hallucination rate (Accuracy 41.6%) drags unaided reliability down.
- **Context window: 90/100.** A native 1M window is the top band, backed by a solid AA-LCR 77.3 for long-context reasoning; no ≥98% MRCR at 512K+ is published, so an upper (not maximum) placement. Curated `meta.json` (128K) is a stub and overridden.
- **Multimodal: 75/100.** Text+image+audio in with strong document/chart reads (CharXiv 82, MMMU-Pro 73.5) puts it above the plain +image band; output is text-only (no image/audio generation), so it sits at the entry of the multi-input tier rather than the omni-output tier.
- **Coding: 72/100.** SWE-bench Verified 77.6% and LiveCodeBench Vals 85.5% clear the ~74 bar, but the harder end is weak — SWE-bench Pro 54.3%, AA Coding Index 52.1% (under 70), SciCode 47.0% and FrontierSWE v2 4.1% — a capable-but-not-frontier code profile for an open-weights model.
- **Cost efficiency: 95/100.** Fully open weights (free to self-host; permissive access) places it in the 92–98 open-weight/free band. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 68, Reasoning 62, Context 90, Multimodal 75, Coding 72 = 73.4 → 73. Best fit: a leading US open-weights multimodal model for self-hosting — strong long-context (1M), good math/SWE-bench-Verified coding and competent image/audio understanding at near-zero licensing cost; it is not the pick for high-stakes autonomous agent work (weak GDPval/Agentic Index) or unaided hard reasoning (low Intelligence Index, high hallucination).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Thinking Machines Lab launch post, Artificial Analysis, Vals AI, Design Arena, Collinear, Proximal and OpenRouter; corroborated by AA/press release confirming 975B MoE / 41B active / 1M / text+image+audio); partial coverage (47/618, Hybrid). Curated `meta.json` stub (128K/text) corrected to verified 1M/multimodal. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
