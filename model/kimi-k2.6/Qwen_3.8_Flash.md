# Kimi K2.6 — findings by Qwen 3.8 Flash

- Source: Moonshot AI / Kimi K2.6 (`opencode/kimi-k2.6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (base)
- **Short description:** Moonshot's open-weight multimodal K2.6 — excellent short-horizon web/tool skills (τ²-bench 95.9%, DeepSearchQA 92.5%) and top-tier contest math (AIME26 96.4%, HMMT 92.7%) with strong vision, but it falls away on sustained autonomy (GDPval-AA 1115, Agentic Index 22.1, OSWorld 2.0 4.6%) and HLE misses the 40% bar.
- **Provider / access:** Moonshot API (`kimi-k2.6`); open weights `moonshotai/Kimi-K2.6` (HF); also on OpenCode Zen (`opencode/kimi-k2.6`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (Moonshot Kimi K2.6 tech blog + model card); knowledge cutoff not disclosed.
- **IDs:** `opencode/kimi-k2.6` / `moonshotai/Kimi-K2.6`.
- **Context window:** BenchLM lists **256K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 256K.
- **Modalities:** BenchLM rows show vision (MMMU-Pro, CharXiv, MathVision, V*), so text+image in despite curated `meta.json` "Text in/out"; no audio/video rows. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (Kimi-class low, exact per-1M rate not in curated meta); open-weight self-hostable.
- **Architecture:** open-weight MoE (Kimi K2 line), multimodal.

### Raw benchmarks found

> Independently verified against BenchLM (55 of 618 rows; 60.17/100, #51 of 645), citing the Moonshot Kimi K2.6 tech blog and HF model card, plus Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, OSWorld 2.0, Cursor and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- τ²-bench **95.9%**; DeepSearchQA **92.5%**; BrowseComp 83.2%; WideResearch 80.8%; OSWorld-Verified 73.1%; Claw-Eval 62.3%; Toolathlon 50.0%; MCP Atlas 55.9%
- Terminal-Bench 2.0 66.7% (Vals 2.1 53.6%) — under the 88 ref
- **Autonomy tail weak:** GDPval-AA 1115 (normalized 26.3%), AA Agentic Index 22.1%, APEX-Agents 28.5%, OSWorld 2.0 4.6%, ResearchClawBench 18.0%, Gert Labs 56.8%

Reasoning / knowledge:

- GPQA-Diamond 90.5/91.1 (clears 90); **HLE 34.7% / AA-HLE 37.5%** — under the 40% bar; MMLU-Pro (Vals) 87.6; IFBench 76.0
- Intelligence Index **27.0** (low); AA-LCR 81.0; CritPt 8.0%
- AIME26 **96.4%**; HMMT Feb 2026 **92.7%**; MMAnswerBench 86.0; FrontierMath v2 Tiers 1-3 39.0% / Tier 4 14.6% (Epoch AI)
- Omniscience Index 5.3 / Accuracy 32.6% / Hallucination 40.5% (moderate)

Coding:

- LiveCodeBench v6 **89.6%** (Vals 86.8%); SWE-bench Verified 80.2%; SWE Multilingual 76.7%; SWE-bench (Vals) 76.2%
- SWE-bench Pro 58.6%; SciCode 52.2 (under ref); AA Coding Index 61.8 (low); Vibe Code 37.9%; CursorBench 3.1 47.6%

Multimodal / long context:

- V* **96.9%**; MathVision 87.4%; CharXiv 80.4%; MMMU-Pro 79.4 (w/ Python 80.1); Design Arena Website 1277
- 256K window (AA-LCR 81.0 supportive; no ≥98% MRCR at length reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 76/100.** τ²-bench 95.9%, DeepSearchQA 92.5%, BrowseComp 83.2% and WideResearch 80.8% are excellent web/tool skills, but Terminal-Bench 2.0 66.7% is under ref and the sustained-autonomy tail — GDPval-AA 1115 (26.3%), Agentic Index 22.1%, OSWorld 2.0 4.6% — keeps it out of the 90 band.
- **Reasoning: 72/100.** GPQA-Diamond 91.1% and superb contest math (AIME26 96.4%, HMMT 92.7%) are strong, but HLE misses the 40% bar (34.7/37.5), Intelligence Index 27.0 and CritPt 8.0% are low, and 32.6% Omniscience accuracy with 40.5% hallucination is only moderate.
- **Context window: 72/100.** BenchLM's 256K window is above the 100–200K band but well under the ≥1M tier; AA-LCR 81.0 supports it and no ≥98% MRCR is reported (curated meta conflicts at 128K), so an upper-mid placement.
- **Multimodal: 70/100.** Text+image in with a strong visual suite (V* 96.9, MathVision 87.4, CharXiv 80.4, MMMU-Pro 79.4) sits at the top of the +image band (60–70); no audio/video/PDF rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 76/100.** LiveCodeBench v6 89.6% and SWE-bench Verified 80.2% are strong, but SWE-bench Pro 58.6%, SciCode 52.2% (under ref), Coding Index 61.8% and Vibe Code 37.9% keep the harder agentic/creative profile mid.
- **Cost efficiency: 82/100.** Kimi-class low "standard pricing" plus open-weight self-hosting; exact per-1M rate unpublished in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 76, Reasoning 72, Context 72, Multimodal 70, Coding 76 = 73.2 → 73. Best fit: open-weight self-hosted web-research agents, competition math and vision-heavy coding where tasks are short-horizon and grounded; for long autonomous loops or unaided frontier reasoning the K3 line and the frontier-hosted models lead — and self-hosting K2.6 recovers most of its value at scale.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Moonshot Kimi K2.6 tech blog and HF model card, plus Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, OSWorld 2.0, Cursor and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
