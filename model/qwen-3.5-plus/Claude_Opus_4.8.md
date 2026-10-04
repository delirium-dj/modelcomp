# Qwen 3.5 Plus — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.5-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's older Qwen 3.5 Plus — a 1M-context model in the Qwen Plus line (predecessor to 3.6/3.7 Plus). Top use case: light general/agentic work; superseded by newer Plus models.
- **Provider / access:** Alibaba Cloud (`qwen3.5-plus`); OpenCode Zen `opencode/qwen-3.5-plus`.
- **Release / knowledge:** Qwen 3.5 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-plus`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; the Qwen Plus family (3.6/3.7) is multimodal (image/video in), so 3.5 Plus likely accepts images — **no verified multimodal benchmark found for this exact model; flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

> Thin public coverage (BenchLM lists 4 rows); most dimensions below note "no verified public score found."

Agent / tool use:

- JobBench: **18.5%**; other agentic (τ²-bench, OSWorld, GDPval): no verified public score found

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **21.0%** / Tier 4 **2.08%**; GPQA / HLE / AA Index: no verified public score found

Coding:

- Vibe Code Bench: **15.74%**; SWE-bench / LiveCodeBench: no verified public score found

Multimodal:

- No verified public multimodal benchmark found (family is multimodal; unverified for 3.5 Plus)

### Normalized scores (1–100)

- **Tool use: 55/100.** Only JobBench 18.5% is public (weak); broader agentic coverage unverified — scored conservatively.
- **Reasoning: 62/100.** FrontierMath T1–3 21% is weak and no GPQA/HLE is public; scored conservatively for an older Plus model.
- **Context window: 88/100.** 1M (BenchLM); meta's 128K understated.
- **Multimodal: 60/100.** No verified 3.5-Plus multimodal benchmark; scored provisionally as image-input per the Qwen Plus family (flag for verification).
- **Coding: 58/100.** Vibe Code Bench 15.74% is weak; no SWE-bench public.
- **Cost efficiency: 62/100.** No verified public price; scored provisionally.
- **Overall Score: 64.6/100.** Half-up mean of the five quality dims (55/62/88/60/58). A weak older Plus model on thin public data; `meta.json` context/modality need correction and several dims rest on limited evidence.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (BenchLM, Epoch AI, Vals AI). Several dimensions lacked verified public benchmarks and are scored conservatively/provisionally; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
