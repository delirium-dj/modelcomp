# Mistral Small 4 — findings by Qwen 3.8 Max

- Source: Mistral AI (`opencode/mistral-small-4`; Mistral API `mistral-small-2603`, La Plateforme / AI Studio, OpenCode Zen, OpenRouter, Hugging Face weights)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's first model to unify the three flagship lines — Magistral (reasoning), Pixtral (multimodal) and Devstral (agentic coding) — into a single Apache 2.0 open-weight MoE with a `reasoning_effort` toggle (none → high), released 2026-03-16 and positioned on best-in-class efficiency rather than frontier intelligence.
- **Provider / access:** Mistral API + AI Studio (id `mistral-small-2603`); OpenCode Zen `opencode/mistral-small-4` (no Free ID — `noFreeId: true`); OpenRouter; open weights on Hugging Face (self-host via vLLM / llama.cpp / SGLang / Transformers); NVIDIA NIM day-0 + free prototyping on build.nvidia.com. Mistral is a founding member of the NVIDIA Nemotron Coalition.
- **Release / knowledge:** Released 2026-03-16; knowledge cutoff not published.
- **IDs:** `opencode/mistral-small-4` (Zen, no Free ID); Mistral API `mistral-small-2603`. No standing $0 API tier — free only for prototyping on NVIDIA accelerated compute.
- **Context window:** 256K tokens (262,144), verified across official + Artificial Analysis + BenchLM. No RULER/MRCR retrieval percentage is published; AA-LCR 49.7% (base) / 0.72 (reasoning, per Mistral) is the only long-context signal.
- **Modalities:** Text and image input (native multimodality, Pixtral lineage); text output. Reasoning yes — configurable, so two profiles exist: a base/non-reasoning variant and a reasoning variant. Tool calling yes (Devstral agentic-coding lineage; agentic harness). No audio input; no non-text output.
- **Pricing (as of 2026-11-09):** $0.15 per 1M input / $0.60 per 1M output (blended ~$0.10/M at 7:2:1); 90% cache discount (~$0.04 cache-hit); ~$0.04 per Intelligence Index task. Apache 2.0 open weights → self-hosting drops marginal cost toward $0.
- **Architecture:** Mixture of Experts, 128 experts with 4 active per token; 119B total parameters / ~6B active (8B including embedding + output layers; Artificial Analysis lists 6.5B active). Hybrid reasoning with `reasoning_effort`. Mistral claims 40% lower end-to-end latency and 3× the requests/second vs Mistral Small 3.

### Raw benchmarks found

> Independent numbers below are all **Artificial Analysis** measurements as aggregated by **BenchLM** (`benchlm.ai/models/mistral-small-4`, fetched 2026-11-09; BenchLM last updated 2026-11-07). BenchLM scores the **base / non-reasoning** variant: **Overall 26.87/100, rank #193 of 1016**, with only **16 of 759** benchmarks covered, so the composite is explicitly conservative. A sibling `mistral-small-4-reasoning` page exists (score not computed). Artificial Analysis separately profiles the **reasoning** variant (Intelligence Index ≈ 4). Vendor (Mistral) figures are labelled as such.

Reasoning / knowledge:

- AA-GPQA Diamond: **76.9%** (respectable, upper-mid).
- AA-HLE: **9.9%** (low).
- CritPt (hard physics reasoning): **0.3%** (near-floor).
- AA-LCR (long-context reasoning): **49.7%** base; Mistral reports **0.72** for the reasoning variant at only ~1.6K characters.
- AA-Omniscience: Index **−31.0%**, Accuracy **21.4%**, Hallucination Rate **66.6%** (poor knowledge reliability).
- Artificial Analysis Intelligence Index: **4.3** (below the open-weight median of 5 — "among the least intelligent models, but well priced").

Coding:

- AA Coding Index: **26.6%** (low).
- AA-SciCode: **38.8%** (low-mid).
- AA-IFBench (instruction following): **48.2%** (mid).
- Vendor: "On LiveCodeBench, Mistral Small 4 outperforms GPT-OSS 120B while producing 20% less output" — a relative claim with no absolute number; Devstral agentic-coding lineage.
- SWE-bench Verified / Terminal-Bench / DeepSWE / LiveCodeBench absolute: **no verified public number found.**

Agent / tool use:

- τ²-bench: **41.2%** (mid — the strongest agentic signal).
- GDPval-AA: Elo **537**, normalized **0.0%** (below the mid band of ~900–1200; frontier ~1750+).
- AA Agentic Index: **1.4%** (near-floor).
- Terminal-Bench / BFCL / Claw-Eval / Toolathon: **no verified public number found.**

Multimodal (vision):

- AA-MMMU-Pro: **56.8%** (moderate visual reasoning; frontier is ~89%+). Native text + image input (Pixtral lineage); no video/audio; text-only output.

Long context:

- 256K-token window verified; AA-LCR 49.7% (base) / 0.72 (reasoning). No RULER/MRCR retrieval percentage published.

Performance / efficiency (Artificial Analysis, reasoning variant):

- Output speed **146 tok/s**; time to first answer token **13.09s**; **1.6 min** per Intelligence Index task (median 4.9 — notably quick); generated **23.9M** output tokens across the Index (median 55.2M — very concise).

> Provenance & meta verification:
> - `model/mistral-small-4/meta.json` is **ACCURATE and well-curated** (not a stub): 119B MoE, "262,144 total (256K)", "Text and image in; text and code out", $0.15/$0.60, Apache 2.0, `noFreeId: true`, plus a correct standout ("open Apache 2.0 MoE hybrid combining chat, reasoning (Magistral) and agentic coding (Devstral)") and an honest tradeoff ("Reasoning and coding indices measure well below frontier; no verified long-context retrieval scores at 256K"). Every field is corroborated by the official launch post + Artificial Analysis + BenchLM. No premise-correction needed. Minor nuance: official states ~6B active (8B incl. embedding/output) where AA lists 6.5B active.
> - Variant caveat: the deployed `mistral-small-4` supports configurable reasoning, so both a base/non-reasoning and a reasoning profile exist. The independent numbers cited are for the **base** slug (BenchLM 26.87, #193); the reasoning variant is stronger on long-context reasoning (LCR 0.72) and is what Artificial Analysis profiles (II ≈ 4). Scores below are anchored on the base numbers, with the reasoning lift noted where relevant — never invented.

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-bench 41.2% is a genuine mid-tier signal, but GDPval-AA Elo 537 (normalized 0.0%) sits below the rubric's mid band (~900–1200) and the AA Agentic Index is near-floor at 1.4%; with no Terminal-Bench/BFCL/Claw-Eval verified, this lands at the very bottom of the mid band.
- **Reasoning: 52/100.** AA-GPQA Diamond 76.9% and AA-LCR 49.7% (0.72 reasoning) are respectable, but the Intelligence Index is 4.3 (below the open-weight median), CritPt is 0.3%, HLE 9.9%, and a 66.6% hallucination rate / −31 Omniscience Index show weak hard reasoning and poor reliability — below the rubric's mid band (Index 20–35).
- **Context window: 72/100.** Verified 256K window sits just inside the 200K–500K tier (200K ≈ 70); held near the bottom of that band because no RULER/MRCR retrieval percentage is published to justify more, with AA-LCR the only long-context evidence.
- **Multimodal: 63/100.** Native text + image input (Pixtral lineage) with a verified AA-MMMU-Pro 56.8%; squarely in the "+image in" band (60–70) and capped there by no video/audio input and text-only output.
- **Coding: 57/100.** Devstral agentic-coding lineage plus a first-party "beats GPT-OSS 120B on LiveCodeBench with 20% less output" claim, but AA Coding Index 26.6% and SciCode 38.8% are low and there is no absolute SWE-bench Verified / Terminal-Bench number — below the rubric's mid coding band.
- **Cost efficiency: 96/100.** $0.15/$0.60 per 1M (blended ~$0.10), 90% cache discount, ~$0.04 per Index task, Apache 2.0 open weights (self-host toward $0), and best-in-class efficiency (146 tok/s, 1.6 min/task, 40% latency cut, 3× RPS vs Small 3). Not 100 because the hosted API has no standing free tier (`noFreeId`) and $0.60 output is mid, not rock-bottom.
- **Overall Score: 59/100.** Half-up mean of the five quality dims (50 + 52 + 72 + 63 + 57) / 5 = 58.8 → 59. **Divergence −7.5 vs the 2-rater cohort (66.5):** my read weights the near-floor independent composites more heavily per the rubric anchors — AA Agentic Index 1.4%, GDPval 537 (normalized 0.0%), Intelligence Index 4.3, CritPt 0.3% and a 66.6% hallucination rate — which pull Tool use and Reasoning below the cohort, while I give fuller credit to Cost (open-weight + efficiency) and to the genuine bright spots (GPQA 76.9%, τ²-bench 41.2%, MMMU-Pro 56.8%). Best fit: a cheap, fast, concise, self-hostable open-weight multimodal model for high-volume chat, document/image understanding and light coding — not for hard reasoning, heavy agentic tool chains, or knowledge-critical work where its hallucination rate bites.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (official Mistral launch post + Artificial Analysis model page + BenchLM aggregate, all fetched 2026-11-09); scores are normalized 1–100 interpretations against the `model-comparison.md` rubric, not official vendor scores. Independent numbers are Artificial Analysis measurements as aggregated by BenchLM (base/non-reasoning variant, 16/759 coverage → conservative); vendor claims are labelled. No score is invented where a benchmark is absent.
- Reference URLs:
  - [Mistral AI — "Introducing Mistral Small 4" (official launch, 2026-03-16: 119B/6B active, 128 experts × 4, 256K, Apache 2.0, Magistral/Pixtral/Devstral unification, `reasoning_effort`, LCR 0.72, LiveCodeBench vs GPT-OSS 120B)](https://mistral.ai/news/mistral-small-4/)
  - [BenchLM — Mistral Small 4 (Overall 26.87/100, #193/1016; AA-sourced rows: GPQA 76.9%, HLE 9.9%, CritPt 0.3%, LCR 49.7%, MMMU-Pro 56.8%, SciCode 38.8%, Coding Index 26.6%, τ²-bench 41.2%, GDPval 537, Agentic Index 1.4%, IFBench 48.2%, Hallucination 66.6%)](https://benchlm.ai/models/mistral-small-4)
  - [Artificial Analysis — Mistral Small 4 (reasoning variant: Intelligence Index ≈ 4, 146 tok/s, 13.09s TTFT, 1.6 min/task, 23.9M output tokens, $0.15/$0.60, 119B/6.5B active, 256K, Apache 2.0)](https://artificialanalysis.ai/models/mistral-small-4)
- Future sources: an absolute SWE-bench Verified / Terminal-Bench / LiveCodeBench number, a RULER/MRCR retrieval score at 256K, or full independent coverage of the reasoning variant (BenchLM currently marks it "not computed") would let a future pass lift Coding, Tool use, Context and Reasoning; add a new file beside this one using the same headings.
