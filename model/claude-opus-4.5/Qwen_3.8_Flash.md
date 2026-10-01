# Claude Opus 4.5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 4.5 (`anthropic/claude-opus-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (base)
- **Short description:** Anthropic's Nov 2025 Opus flagship that cut Opus-tier pricing by ~67% while reaching SOTA real-world software engineering at launch. On BenchLM it is a mid-pack, **Non-Reasoning** model (58/618 rows; 55.64/100, #61 of 645): strong on SWE-bench Verified (80.9%) and LiveCodeBench v6 (84.8%), but soft on agentic breadth (VITA 23.3%, DeepPlanning 26.4%) and on reasoning (AA-HLE 13.2%, Intelligence Index 23.7%, 76.2% hallucination). Superseded on every axis by Opus 4.6 → 5.5.
- **Provider / access:** Anthropic API (`claude-opus-4-5`), OpenRouter, Amazon Bedrock, Google Vertex. Tool calls; image input.
- **Release / knowledge:** Nov 2025; knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-opus-4.5`.
- **Context window:** BenchLM and curated `meta.json` agree at **200K**.
- **Modalities:** Text + image in; text out (curated meta and BenchLM agree; VideoMMMU reads present but output is text-only).
- **Pricing (as of 2026-10-02):** $5 input / $25 output per 1M tokens (paid tier; `noFreeId`).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (58 of 618 rows; 55.64/100, #61 of 645, Non-Reasoning type), citing the Anthropic Opus 4.5 system card, Artificial Analysis, Qwen3.6-Plus comparison tables, Epoch AI, Vals AI, OpenRouter and VITA/JobBench papers (fetched 2026-10-02). Coverage is partial; the overall score is flagged conservative by BenchLM.

Agent / tool use:

- τ²-bench **86.3%** (good tool use); OSWorld-Verified 66.3%; MCP-Tasks 71.8%; WideResearch 76.4%; Gert Labs 64.23%; Terminal-Bench 2.0 59.3%
- weak agentic planning: VITA-Bench 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%, MCP Atlas 42.3%, JobBench 32.3%; no GDPval-AA row

Coding:

- SWE-bench Verified **80.9%**; LiveCodeBench v6 **84.8%**; SWE Multilingual 77.5%; but SWE-bench Pro 57.1% and NL2Repo 43.2% (weaker on harder/longer tasks)

Reasoning / knowledge:

- GPQA 87% (AA-GPQA Diamond 81.0, under 90 bar); HLE 30.8% and AA-HLE **13.2%** (well under 40 bar); SuperGPQA 70.6%; MMLU-Pro 89.5 / MMLU-Redux 96.6 / C-Eval 92.2
- AA Intelligence Index **23.7** (low); CritPt 0.3%; FrontierMath v2 Tiers 1-3 20.7% / Tier 4 4.2%
- AA-Omniscience Index -4.1 / Accuracy 40.9% / **Hallucination 76.2%** (severe)

Multimodal / long context:

- MMMU-Pro 70.6 / AA-MMMU-Pro 71.2; MathVision 74.3; CharXiv 68.5; VideoMMMU 84.4; ScreenSpot Pro 45.7; V* 67.0; Design Arena Website 1255
- LongBench v2 64.4; AI-Needle 74; AA-LCR 70.7 (200K window; no ≥98% MRCR at 512K+ reported)

Instruction / math:

- IFEval 90.9 / IFBench 58 / AA-IFBench 43.0; AIME26 95.1; HMMT 92.9/93.3/85.3

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 70/100.** τ²-bench 86.3%, OSWorld 66.3%, MCP-Tasks 71.8% and WideResearch 76.4% are solid real-tool signals, but breadth is uneven — VITA 23.3%, DeepPlanning 26.4%, Toolathlon 43.5% and Terminal-Bench 2.0 59.3% show weak long-horizon planning, and there is no GDPval-AA autonomy row.
- **Reasoning: 55/100.** GPQA 81.0 (AA) is under the 90 bar, AA-HLE 13.2% is far under the 40 bar, Intelligence Index 23.7 and CritPt 0.3% are low, and a 76.2% hallucination rate (Accuracy 40.9%) heavily undermines unaided reliability for a Non-Reasoning model.
- **Context window: 64/100.** A 200K window sits at the top of the 100–200K (50–64) band; AA-LCR 70.7 and LongBench v2 64.4 support retention but no ≥98% MRCR at 512K+ is demonstrated (both sources agree at 200K), so an upper-band placement.
- **Multimodal: 68/100.** Text+image in with a competent vision reads (MMMU-Pro 70.6, MathVision 74.3, CharXiv 68.5, VideoMMMU 84.4) — a +image band (60–70) with a nod to video understanding; ScreenSpot 45.7 and text-only output keep it from the higher document/omni tiers.
- **Coding: 78/100.** SWE-bench Verified 80.9% and LiveCodeBench v6 84.8% clear the ~74% bar and read well, tempered by SWE-bench Pro 57.1% and NL2Repo 43.2% on harder, longer-horizon code — a strong-but-not-frontier coding profile.
- **Cost efficiency: 55/100.** $5 input / $25 output per 1M is a premium Opus-tier price (no free ID); the Nov-2025 67% cut makes it cheaper than prior Opus but still above the mid ~$3/$15 band, so a below-mid placement. Cost is excluded from Overall.
- **Overall Score: 67/100.** Mean of Tool 70, Reasoning 55, Context 64, Multimodal 68, Coding 78 = 67. Best fit: a real-world software-engineering and code-review workhorse (SWE/LCB strength) with competent image understanding and good short-horizon tool use; it is weak on long-horizon agentic planning and unaided reasoning (low HLE/Intelligence Index, high hallucination) and is clearly superseded by Opus 4.6 → 5.5 for frontier autonomy or hard reasoning.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic system card, Artificial Analysis, Qwen3.6-Plus comparison tables, Epoch AI, Vals AI, OpenRouter and VITA/JobBench papers); partial coverage (58/618, Non-Reasoning). Reasoning/Tool scored with the noted hallucination and planning drags. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
