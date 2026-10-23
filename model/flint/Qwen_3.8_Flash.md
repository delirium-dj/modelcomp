# Flint — findings by Qwen 3.8 Flash

- Source: **Recursive "Flint"** (curated id `opencode/flint`), cross-checked against the Recursive Intelligence launch coverage, the HF `RecursiveSI/flint` model card, and the OpenRouter "Recursive: Flint (free)" listing
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note (why scored, not excluded):** the curated `meta.json` for this folder is **scaffolded** (generic "Flint model evaluation entry / 128K total / Standard pricing") and carries no real product info. Web research resolves "Flint" to a **genuine, freshly-shipped model**: **Recursive Flint**, released **2026-10-21** by **Recursive Intelligence** (Richard Socher's lab, out of stealth May 2026; ~$650M raised at a ~$4.65B valuation). Existence, maker, weights (HF `RecursiveSI/flint`), license (**Apache-2.0**) and access (a free OpenRouter lane) are all independently verifiable — so it is **scored on real evidence**, not excluded as a phantom. The scaffolded spec claims below are **overridden** by first-party/press evidence.

## Model card

- **Name:** Flint (Recursive Flint)
- **Short description:** An **open-weight, text-only coding/agentic MoE** from Recursive Intelligence — ~**40B total params (~39.8B) with ~2.5B active** — positioned as a small, cheap, laptop-runnable engineer model. Recursive reports it was produced by their **"Eureka Machine"** automated research system in **under four months**. It targets terminal use and SWE-style tasks, ships quantized for on-device inference, and is offered **free / open-weights**.
- **Provider / access:** **open weights** (Hugging Face `RecursiveSI/flint`, **Apache-2.0**); hosted free tier on **OpenRouter** ("Recursive: Flint (free)"); self-hostable.
- **Release / knowledge:** launched **2026-10-21**; a brand-new release with no established eval history yet.
- **IDs:** `flint` / `RecursiveSI/flint`.
- **Context window:** **262,144 documented** (press also quotes up to 512K, with ~256K "recommended"); the scaffolded meta's "128K" is superseded by the model-card figure.
- **Modalities:** **text in / text out** — a text-only coding model in this release; no image/audio/video lanes.
- **Pricing (as of 2026-10-23):** **free** (open weights; free OpenRouter lane). Cost is essentially inference compute only.
- **Architecture:** sparse **mixture-of-experts** transformer, ~40B total / ~2.5B active; served quantized (**NVFP4 within ~0.7 pts of BF16**, 4-bit `lm_head`, Metal megakernel for Apple M4/M5); runs ~**131 tok/s on an M4 Pro laptop**, and in a server on SGLang (BF16 ~80 GB).

### Raw benchmarks found

> **Provenance caveat:** **every capability number below is self-reported by Recursive** (model card / launch post, temp 1.0, top-p 0.95, top-k 20, avg pass@1 over ≥5 runs). As of 2026-10-22 **no independent evaluator (Artificial Analysis, LMArena, third-party SWE/terminal runs) has published a Flint score** — this is a genuine **evidence vacuum** on a same-week release, so all figures are **heavily discounted**.
>
> **Anomaly flag:** the card's **SWE-bench *Pro* v2 (89.7%) exceeds SWE-bench *Verified* (74.2%) by ~15.5 points** — backwards from the usual relationship where Pro is the *harder* suite. The release does not explain it (different harness/subset?), so the coding number is treated with extra skepticism rather than taken at face value.

Self-reported (Recursive, 2026-10-21):

- **Terminal-Bench 2.1: 54.9%** · **SWE-bench Verified: 74.2%** · **SWE-bench Pro v2: 89.7%** (see anomaly above)
- Internal "six-test average" reportedly trails only **Qwen3.8 27B** in their comparison set; Wired's Will Knight confirmed it handled all requests on a 48 GB Mac.
- **No** independent GPQA / MMLU / AIME / MRCR / arena-Elo rows exist yet.

### Normalized scores (1–100)

- **Tool use: 66/100.** Billed as a terminal/agentic engineer — self-reported **Terminal-Bench 2.1 54.9%** is a respectable mid-tier signal, and the whole pitch (SGLang server, tool-friendly coding) points at real function-calling utility. But it is **vendor-only and unaudited**, so scored mid rather than high.
- **Reasoning: 60/100.** A ~**2.5B-active** MoE is a small-reasoning-budget model; Recursive itself warns it "**may need more guidance**" and that large tasks should be broken into steps. No independent reasoning eval exists — mid, with clear headroom limits from the tiny active parameter count.
- **Context window: 82/100.** **262K documented** (press quotes up to 512K) is a genuinely large window — top-tier breadth — but with **no published retrieval/needle proof** (no MRCR/RULER), so scored high-but-not-max on spec alone.
- **Multimodal: 15/100.** **Text-only** in this release — the structural floor; no image/audio/video lanes.
- **Coding: 68/100.** The headline strength (SWE-bench Verified ~74 self-reported) marks it as a serious coding specialist for its size — **but** every figure is vendor-run, the **Pro>Verified anomaly is unexplained**, and there is no third-party confirmation, so this is a discounted mid-high rather than a frontier coding score.
- **Cost efficiency: 100/100.** The clearest verified virtue: **free Apache-2.0 weights running on a laptop** (131 tok/s on M4 Pro), a free OpenRouter lane, and NVFP4 quantization close to BF16 quality — near-zero cost.
- **Overall Score: 58.2/100.** Half-up mean of the five quality dims (66+60+82+15+68)/5 = 58.2. Best fit: **cheap, local, text-only coding/terminal agenting** where a free ~40B-A2.5B model with a 262K window and a strong *self-reported* SWE number can offload routine engineering work to a laptop. The score is **provisional**: it rests almost entirely on **first-party benchmarks on a same-week release with zero independent evaluation**, an **unexplained SWE-bench Pro/Verified inversion**, and Recursive's own caveat that the model "may need more guidance." Treat the coding/tool figures as optimistic until an independent row lands; the **text-only 15** is the structural floor and the large-but-unproven context is the main upside.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — Recursive Intelligence's **Flint launch** (release 2026-10-21; ~40B total / ~2.5B active MoE, Apache-2.0, HF `RecursiveSI/flint`, free OpenRouter lane, built by the "Eureka Machine" in <4 months, NVFP4 within ~0.7 pts of BF16, ~131 tok/s on M4 Pro, SGLang server ~80 GB BF16), and the model-card **self-reported** benchmarks (**Terminal-Bench 2.1 54.9%, SWE-bench Verified 74.2%, SWE-bench Pro v2 89.7%**). The curated `meta.json` was **scaffolded** (generic 128K/"Standard pricing") and is **overridden** by first-party/press evidence (262K documented context, free, text-only). Scores are normalized 1–100 interpretations, applied under a **heavy vendor-only discount**: **no independent benchmark of Flint existed as of 2026-10-22**, so capability dims rest on unaudited self-reports. The **SWE-bench Pro (89.7) > Verified (74.2) inversion** is explicitly flagged as unexplained and is why coding is capped at a discounted 68 rather than a literal reading. **Multimodal = 15** (text-only). Flint is a **real, verifiable, freshly-shipped model** (existence/maker/weights/license confirmed), so it is **scored, not excluded** — and never conflated with any sibling folder.
- Revisit trigger: an **independent** Flint evaluation (Artificial Analysis Intelligence Index row, LMArena Elo, third-party SWE-bench/Terminal-Bench runs), resolution of the SWE-bench Pro-vs-Verified inversion, or an official multimodal/long-context retrieval disclosure.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
