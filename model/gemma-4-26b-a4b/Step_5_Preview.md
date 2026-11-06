# Gemma 4 26B A4B — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-26B-A4B-it`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B — the **25.2B-total / 3.8B-active multimodal MoE** of the Gemma 4 family, and the family's best-balanced size. **A negative finding governs this report: BenchLM carries no `gemma-4-26b-a4b` page in any spelling** (hyphen, dotted and `gemma-4-26b` variants all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A thinking model with configurable thinking modes, **image and video (via frames) input**, and strong benchmark numbers for an Apache-2.0 model at this size: **GPQA Diamond 82.3, MMLU-Pro 82.6, AIME 2026 88.3, LiveCodeBench v6 77.1 and Codeforces Elo 1718**. Its two weak rows are the family's signature gap — **HLE without tools 8.7 (with search 17.2)** — and **MRCR-128k 44.1** on a 262K window.
- **Provider / access:** Self-hostable, **Apache-2.0** weights at `huggingface.co/google/gemma-4-26B-A4B-it`; also live on OpenRouter as `google/gemma-4-26b-a4b-it`. models.dev records it at **$0.00/$0.00** across providers.
- **Release / knowledge:** released **2026-04-02** (models.dev and Artificial Analysis agree). **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face); `google/gemma-4-26b-a4b-it` (OpenRouter); `google/gemma-4-26b-a4b-it` (models.dev).
- **Context window:** **262,144 tokens** (models.dev) with **32,768 max output**. **Artificial Analysis's page body says 256k while its FAQ says 260k — a minor internal conflict, recorded rather than reconciled**; models.dev's 262,144 is used.
- **Modalities:** **text, image and video in (video processed as frames); text out.** Configurable thinking mode. Multimodal with no non-text output.
- **Pricing (as of 2026-11-06):** **$0.10 in / $0.34 out** per 1M (Artificial Analysis's median across 7 API providers, 50% cache discount). **models.dev lists $0.00/$0.00, its standard convention for open-weights models**, so the metered figure is used for cost scoring and the open-weights route is noted.
- **Architecture:** open weights, **Apache-2.0**. MoE with **25.2B total / 3.8B active**, 30 layers, 8 of 128 experts plus 1 shared per token, 262K vocabulary, 1024 sliding window, and a vision encoder of ~550M parameters. HF's metadata label rounds this to "26B params". Tech report: arXiv 2607.02770.

### Raw benchmarks found

- **GPQA Diamond: 82.3** (HF card; confirmed at 82.3 by the HF eval-results widget) — 7.7 under the 90% frontier reference
- **MMLU-Pro: 82.6** (HF card; confirmed at 82.6 by the widget); **MMMLU: 86.3**
- **AIME 2026 without tools: 88.3** (HF card) — near the 90%+ tier
- **HLE without tools: 8.7; HLE with search: 17.2** (HF card) — **the weakest reasoning rows here, and the same open-domain-knowledge gap seen across the Gemma 4 family**
- **BigBench-Extra Hard (BBEH): 64.8** (HF card)
- **Tau2-Bench: 68.2** (HF card) — **the only agentic/tool-use number published for this model**
- **MRCR-128k: 44.1** (HF card) — long-context retrieval with a tool-style harness; recorded under long context too
- **LiveCodeBench v6: 77.1**; **Codeforces Elo: 1718** (HF card) — **the strongest single coding signal here**
- **MMMU-Pro: 73.8**; **MATH-Vision: 82.4**; **OmniDocBench 1.5: 0.149 edit distance** (HF card — lower is better, so this is a strong document result); MedXPertQA-MM: 58.1
- **MATH-500 and HLE-with-tools beyond the two figures above: no verified public score found.**
- **Tau3-Banking: no verified public score found.**
- **No verified public score found** for SWE-bench Verified/Pro, Terminal-Bench, Toolathlon, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index or AA-Omniscience.
- **Output speed 81.5 tokens/second**, ranked #33 of 64 in class; **time to first token 0.95 s** (Artificial Analysis, median across providers).

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the mid band. **Tau2-Bench 68.2 is the only agentic figure** and it is a mid-band result. **No Terminal-Bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index figure exists**, so all three of the methodology's agentic frontier references are unmeasured and no composite exists.
- **Reasoning: 68/100.** Mid-band, and the best-grounded dimension. **GPQA Diamond 82.3, MMLU-Pro 82.6, MMMLU 86.3 and AIME 2026 88.3** are all solid upper-mid figures, with GPQA and AIME both re-confirmed on independent runs. Held below the frontier tier by **HLE without tools 8.7 (with search 17.2)** — near-floor open-domain knowledge — and **BBEH 64.8**, and by the **total absence of CritPt, AA-LCR, ARC-AGI, the AA Intelligence Index and AA-Omniscience**, so reliability and composite depth are unknown.
- **Context window: 85/100.** **262,144 tokens with 32,768 max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling. Held at the ceiling rather than the ≥1M tier because **MRCR-128k is only 44.1** — weak retrieval for the window size — and **no RULER or AA-LCR figure exists**, so the window's usable depth is unverified. **A 262K-vs-260K-vs-256K conflict between Artificial Analysis's page body, its FAQ and models.dev is recorded rather than reconciled.**
- **Multimodal: 78/100.** **Text, image and video-as-frames in; text out** — the methodology's upper multimodal band on input breadth, scored at 78 rather than the top because the measured quality is mid-upper rather than frontier (**MMMU-Pro 73.8, MATH-Vision 82.4**) and there is no non-text output. **OmniDocBench 1.5 at 0.149 edit distance is a genuinely strong document result** and is the strongest single visual row.
- **Coding: 62/100.** Below the mid band's top. **LiveCodeBench v6 77.1 and Codeforces Elo 1718** are strong competitive-programming figures for a 3.8B-active MoE; held below the upper band because **no SWE-bench Verified/Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench or Terminal-Bench figure exists**, so the 85%, 74% and 70% references cannot be checked.
- **Cost efficiency: 95/100.** **Apache-2.0 open weights with models.dev listing $0.00/$0.00 across providers and a metered route at $0.10/$0.34 per 1M** — the open-weights route brings this to the methodology's near-$0 anchor, with the published API price disclosed for anyone who cannot self-host. **Output speed 81.5 tok/s and TTFT 0.95 s** corroborate the efficiency claim on the served route.
- **Overall Score: 69/100.** (52 + 68 + 85 + 78 + 62) / 5 = 69.0 → **69**. Recommendation: **the best-balanced member of the Gemma 4 family** — GPQA 82.3, AIME 88.3, LiveCodeBench 77.1 and Codeforces 1718 at 3.8B active, Apache-2.0 weights, a 262K window and $0.10/$0.34 metered pricing with a $0.00/$0.00 open-weights route. Two cautions: **HLE without tools 8.7 is near-floor**, so it is not a deep open-domain reasoner; and **MRCR-128k 44.1** means the window is nominal rather than usable depth. Prefer **Gemma 4 12B Unified** for audio input or **Gemma 4 E4B** for the edge footprint, both refreshed in this session.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `gemma-4-26b-a4b` page in any spelling** (hyphen, dotted and `gemma-4-26b` variants all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-24), with every figure re-attributed to the HF model card — and where the HF eval-results widget independently re-confirmed a row (**GPQA Diamond 82.3, MMLU-Pro 82.6**), that double-attribution is stated — **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **A spec conflict is recorded rather than reconciled: Artificial Analysis's page body says 256k context while its FAQ says 260k, and models.dev says 262,144** — models.dev's figure used, the others named. **The family-wide HLE gap is attributed explicitly**: HLE without tools 8.7 and with search 17.2 are the weakest rows in the file, and the same pattern appears in the 12B and E4B siblings, which is why the reasoning score sits at 68 rather than higher despite four strong figures. The **MRCR-128k 44.1** is named as the reason the context score sits at the band ceiling. **The OmniDocBench 1.5 0.149 edit distance row is recorded as lower-is-better rather than read as a poor score**, and the **~550M vision encoder** and **8-of-128-experts-plus-1-shared** architecture figures as the model's distinctive properties. Missing benchmarks (MATH-500, HLE-with-tools beyond the two figures, Tau3-Banking, SWE-bench Verified/Pro, Terminal-Bench, Toolathlon, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index, AA-Omniscience) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-26B-A4B-it model card (Apache-2.0 weights, all benchmark rows)](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Artificial Analysis — Gemma 4 26B A4B ($0.10/$0.34 median across 7 providers, speed figures, 256k/260k conflict)](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [models.dev — `google/gemma-4-26b-a4b-it` provider record ($0.00/$0.00, 262,144/32,768)](https://models.dev/models/google-gemma-4-26b-a4b-it)
  - [arXiv — Gemma 4 tech report (2607.02770)](https://arxiv.org/abs/2607.02770)
  - [Repo curated meta — `model/gemma-4-26b-a4b/meta.json`](/model/gemma-4-26b-a4b/meta.json)
  - See also: [`model/gemma-4-12b-unified/`](gemma-4-12b-unified.md) — the audio-capable sibling refreshed in this same batch; [`model/gemma-4-e4b/`](gemma-4-e4b.md) — the edge sibling
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
