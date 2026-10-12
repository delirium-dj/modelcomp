# Gemma 4 12B Unified — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4.12b-unified`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Unified)
- **Short description:** Google DeepMind's open-weights Gemma 4 family member — a 12B dense, encoder-free "unified" multimodal model that ingests text and images through one architecture. Top use cases: laptop-runnable multimodal inference, coding help, and self-hosted/full-data-control deployments. BenchLM ranks it #148 of 889 (36.59).
- **Provider / access:** Hugging Face `google/gemma-4-12B-it` (open weights, Apache 2.0 per coverage of the family); hosted on Vertex AI and third-party hosts (Groq-class providers; see the Gemma 4 hosted-pricing guides); indexed by Artificial Analysis as gemma-4-12b. Chat Completions-style or Gemini-API-style depending on host.
- **Release / knowledge:** Gemma 4 family released July 2026 (family overview 2026-07-08, E4B README 2026-07-15); knowledge cutoff not published.
- **IDs:** `google/gemma-4-12B-it` (HF); Artificial Analysis `gemma-4-12b`. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 256K tokens officially (BenchLM concurs; Hugging Face model card); one guide (MindStudio) cites 128K "in practice" for the 12B/26B variants — unresolved practical-vs-rated gap.
- **Modalities:** text + image input via the encoder-free unified architecture, text output; described as "any-to-any" in open-weights comparisons. Reasoning-capable (a reasoning-mode variant is referenced for the family); tool calls/JSON mode not documented for the 12B.
- **Pricing (as of 2026-10-11):** open weights free (Apache 2.0); hosted rates roughly $0.04–$0.99 per 1M input tokens depending on provider and model size (2026 API pricing guide, verified Sept 2026); exact Vertex AI 12B rate not published in the sources reviewed.
- **Architecture:** 12B dense (Gemma 4 spans 2.3B–31B across dense E2B/E4B/12B/31B and MoE 26B-A4B), 16-bit default precision, pre-trained + instruction-tuned variants; Gemma 4 technical report on arXiv.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **591** (AA, independent — normalized **0.0%**, floor)
- τ²-bench: **36.3%** (AA, independent — fills the gap; weak)
- Terminal-Bench / Tau3 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (HF model card via benchlm.ai — corroborates the third-party ~78.8% read); AA independent: **75.3%**
- HLE (w/o tools): **5.2%** (HF model card — fills the gap; floor); AA-HLE: **15.7%** (AA)
- Artificial Analysis Intelligence Index: **14.2** (AA — fills the index gap; low)
- MMLU-Pro: **77.2%**; MMMLU: **83.4%**; AIME26: **77.5%** (HF card)
- MRCR v2: **43.4%** (HF card — first measured long-context retrieval, weak); AA-LCR v1.1: **63.7%** (AA — fills the gap); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **15.6% accuracy / 81.0% non-hallucination row / −52.7 index** (AA — worst index measured in this repo)

Coding:

- LiveCodeBench v6: **72.0%** (HF model card via benchlm.ai — **corroborates the orcarouter 72.0% reading and resolves the prior 72.0-vs-51.1 TML conflict toward 72.0**)
- AA Coding Index: **31.0%** (AA — new; weak)
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench: no verified public score found for the 12B

Long context:

- MRCR v2 43.4% and AA-LCR 63.7% are the first measured long-context numbers (weak-mid); 256K official / 128K practical gap unresolved

Multimodal:

- MMMU-Pro: **69.1%** (HF card) / **69.7%** (AA — corroborated); MathVision: **79.7%**; MedXpertQA (MM): **48.7%** (HF card) — first measured vision evidence, decent for the class

### Normalized scores (1–100)

- **Tool use: 45/100.** (Was 55 on the prior pass.) The measured rows are weak (τ²-bench 36.3%, GDPval 591 / 0.0% normalized) — the neutral floor for an unproven 12B becomes a measured deduction.
- **Reasoning: 64/100.** (Was 72 on the prior pass.) GPQA 75.3–78.8% (two sources) stays respectable for 12B, but HLE 5.2%, AA Index 14.2, CritPt 0.0% and the −52.7 Omniscience index document the class ceiling.
- **Context window: 66/100.** (Was 70 on the prior pass.) 256K official window (BenchLM concurs) is a solid mid-tier spec, but the first measured retrieval numbers (MRCR v2 43.4%, AA-LCR 63.7%) are weak and the 128K practical claim stands unresolved.
- **Multimodal: 66/100.** (Was 58 on the prior pass.) Measured vision now exists and is decent for the class (MMMU-Pro 69.1/69.7%, MathVision 79.7%) — raised within the image-in band.
- **Coding: 64/100.** (Was 68 on the prior pass.) LiveCodeBench v6 72.0% is corroborated (conflict resolved), but AA Coding Index 31.0% and the absent SWE-bench row hold the mid band.
- **Cost efficiency: 90/100.** Free Apache 2.0 weights that run on a laptop, plus hosted options from ~$0.04/1M input, make this one of the cheapest usable multimodal models; not higher because hosted output-token rates vary wildly by provider.
- **Overall Score: 61.0/100.** (Was 64.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (45 + 64 + 66 + 66 + 64) / 5 = 305/5 = 61.0 — lowered on the 2026-10-11 second pass as the HF card + AA boards convert every prior gap into measured evidence. Best fit: self-hosted, privacy-sensitive multimodal and coding assistance on commodity hardware — not agentic workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Google Gemma 4 12B HF model card, Artificial Analysis model benchmarks via benchlm.ai, the prior 2026-10-05 pass on orcarouter/technofuzn/AAA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
