# Flint — findings by Step 5 Preview

- Source: Recursive (`flint`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive's Apache-2.0 39.8B/2.5B-active text MoE coding model (released 2026-10-21, three days before this report), trained from scratch in under four months largely by an automated research loop, and free both as weights and on the OpenCode Zen free tier.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/RecursiveSI/flint` (Ollama library entry `flint`); live on OpenRouter as `recursive/flint-v1.0`, including the **free** route `recursive/flint-v1.0:free`. A free OpenCode Zen route exists as **`flint-40b-free`** — free input/output/cache, but **data is retained for 30 days and may be used to improve the model**.
- **Release / knowledge:** released **2026-10-21** (models.dev, OpenRouter, and the launch post `recursive.com/updates/introducing-recursive-flint`, all agreeing). **Knowledge cutoff June 2026** (model card, corroborated by the OpenCode models.dev record).
- **IDs:** `RecursiveSI/flint` (Hugging Face); `recursive/flint` / `recursive/flint-v1.0` (models.dev and OpenRouter); `flint-40b-free` (OpenCode Zen free route).
- **Context window:** **262,144 tokens** documented (models.dev, the OpenCode `flint-40b-free` route, and the Ollama entry). The launch post additionally claims **512K supported with ≤256K recommended** — a vendor claim that is not corroborated by the catalogs. Max output conflicts by route: 262,144 (models.dev) vs 235,929 (OpenRouter free route) vs 65,536 (OpenCode Zen free route).
- **Modalities:** **text in, text out** (models.dev and the OpenRouter record both list input `[text]` / output `[text]`). Reasoning model; tool calling `true`, structured output `true` (models.dev), temperature `true`.
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M — open weights under Apache-2.0 plus a free route on both OpenRouter and OpenCode Zen. The Zen route carries the 30-day data-retention caveat noted above.
- **Architecture:** open weights, **Apache-2.0**. **39.8B total parameters, ~2.5B active** (Ollama and the launch post; the model body is ~2.2B active). 49 layers (2 dense + 47 MoE), 256 experts with 6 routed + 1 shared per token, 32 query / 4 KV heads, vocabulary 150,144.

### Raw benchmarks found

**Every Flint benchmark is vendor-run.** Independent benchmarkers were checked and carry no data: Artificial Analysis returns 404 for both `/models/flint` and `/models/flint-v1.0` and the model is absent from Bing's results; no third-party Intelligence Index, rank or cost-per-task figure exists. The only non-vendor signal is Wired's Will Knight, who reported positive hands-on coding tests (qualitative, no numbers), plus one independent *speed* measurement included below.

Reasoning / knowledge:

- **AIME 2026: no verified public score found.** One secondary article (intelligentliving.co, comparing Flint to Bonsai 2) states Flint "comfortably wins the competition-math check" but gives only the competitors' numbers (Bonsai 95.83 vs parent 94.58), not Flint's own. The wording is ambiguous about which row is which, so no Flint AIME figure is reported here.
- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Artificial Analysis Intelligence Index: no verified public score found (404).
- SciCode: no verified public score found.

Agent / tool use:

- **Terminal-Bench 2.1: 54.9%** (vendor; reported on the HF card, the Ollama entry and `recursive.com/updates/introducing-recursive-flint`)
- IFEval: **95.1** (vendor, via intelligentliving.co's Flint-vs-Bonsai comparison citing the Recursive launch post and a PrismML whitepaper)
- Terminal-Bench is the only agentic benchmark with a number. Tau3-Banking, Tau2-Bench, GDPval-AA, OSWorld, Claw-Eval, ClawProBench, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished.

Coding:

- **SWE-bench Verified: 74.2%** (vendor, HF/Ollama/launch post)
- **SWE-bench Pro v2: 89.7%** (vendor, same three sources)
- **LiveCodeBench v6: 80.3** (vendor, via intelligentliving.co; comparators on the same page: Bonsai 2 at 90.07 and Qwen 3.8 27B FP16 at 90.05 — so Flint is *behind* both on this benchmark, which the primary coverage does not mention)
- SciCode, DeepSWE, Vibe Code Bench, HumanEval/MBPP: no verified public score found.
- A composite "mean of 6" score exists only as a chart image on the HF card, with no text value.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 262,144-token window is documented by three sources; a 512K claim exists only in the vendor launch post and is not corroborated.
- Practical long-context caveat, measured independently: a reviewer (via intelligentliving.co) found throughput collapses to **~9 tokens/second at roughly 115K context**. That is a speed rather than a retrieval measurement, but it is the only independent quantitative finding about this model and it materially changes long-context usability.

Speed (the one independently measured dimension):

- Vendor figures: **125+ tok/s on an M4 Pro MacBook Pro** and **150+ tok/s on a 64GB RTX Spark** (Recursive's own engine, short context); NVIDIA separately reports a **55% kernel speedup on RTX Spark**.
- Independent llama-bench, full offload on a Radeon AI PRO R9700 32GB (huggingface.co/romanerm/flint-GGUF): **tg128 95.79 ± 1.64 tok/s (IQ4_XS), 99.70 ± 1.42 (IQ4_NL), 97.79 ± 1.76 (Q4_K_M)**; prompt processing **pp512 4450-4812 tok/s**. These are close to the vendor's short-context claims, which is a genuine point in the model's favour.
- **The independent 115K-context collapse to ~9 tok/s is the most decision-relevant number in this file.**

Training provenance ("built mostly by AI"):

- Recursive's "**Eureka Machine**" automated the research loop: architecture search moved from a 35B/3B baseline to the shipped 40B/2.5B configuration, with a 4-bit lm_head and self-distillation on a self-discovered data coreset roughly halving training steps; NVFP4 quantization landed within 0.7 points of BF16. A Metal megakernel was developed in the same loop. Humans set targets and budgets and judged results.
- Trained **from scratch in under 4 months** (pretrain, midtrain, SFT, RL), with training data including AI-generated synthetic data (disclosed on the int4 model card).
- Funding context: $650M raised at a $4.65B valuation (GV, Nvidia, AMD Ventures).

### Conflicts recorded (not silently resolved)

1. **Max output:** 262,144 (models.dev) vs 235,929 (OpenRouter free route) vs 65,536 (OpenCode Zen `flint-40b-free` route). The model's native limit is 262,144; the smaller route caps are gateway-side and are recorded separately.
2. **Context window:** 262,144 documented (three sources, used here) vs 512K "supported, ≤256K recommended" (launch post only).
3. **Provider count:** models.dev's canonical record shows **1 provider**, which contradicts the earlier working assumption of 12. models.dev's canonical record is used.
4. **AIME:** one secondary source implies Flint wins competition math but never states Flint's own number — explicitly recorded as *not found* rather than inferred.
5. **LiveCodeBench positioning:** the intelligentliving comparison shows Flint at 80.3 *behind* Bonsai 2 (90.07) and Qwen 3.8 27B FP16 (90.05) on that benchmark, which sits awkwardly beside the model's strong SWE-bench numbers. Both are vendor-reported; the divergence is flagged, not averaged away.
6. **All benchmarks are single-sourced from the vendor.** With Artificial Analysis absent and no independent benchmarker publishing Flint scores, the SWE-bench and Terminal-Bench figures carry no independent replication — the same caveat that applied to Leanstral 1.5 in this pass.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 at 54.9% is the only agentic number and it is mid-band — above Muse Wonder's TB4.0-tier results is not claimed; it sits between mid and the frontier band. IFEval at 95.1 shows strong instruction adherence, and tool calling plus structured output are both enabled. Scored 70 on the measured TB result, capped below 80 because Tau3, GDPval-AA, OSWorld, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished, so there is no evidence of breadth beyond terminal use.
- **Reasoning: 60/100.** No verified public score found for AIME, GPQA, HLE or any independent Intelligence Index — the entire reasoning picture rests on indirect signals (IFEval 95.1, SWE-bench-class results, and a secondary article's ambiguous claim of a competition-math win). One secondary article implies strong math but never states the number. Scored 60 as an explicitly provisional mid-band estimate derived from adjacent capability, and flagged as the least-evidenced dimension in this file alongside GLM-4.6V-Flash's.
- **Context window: 74/100.** 262,144-token documented window with 262,144 max output sits in the methodology's 200K-500K band well above the 200K floor (200K = 70), and the max output being equal to the full window is unusual. Held to 74 rather than the top of the band for three reasons: no MRCR/RULER retrieval figure exists at any length; the 512K claim is vendor-only and uncorroborated; and the independent measurement of ~9 tok/s at ~115K context shows the window degrades badly in practice long before its nominal limit.
- **Multimodal: 15/100.** Text in, text out per models.dev and the OpenRouter record — the methodology's text-only band (10-20), at the top of it. No image, audio or video capacity is claimed anywhere.
- **Coding: 82/100.** SWE-bench Verified at 74.2% clears the methodology's 74% frontier reference, SWE-bench Pro v2 at 89.7% is a strong agentic-software-engineering result, and Terminal-Bench 2.1 at 54.9% is the mid-band counterweight. Capped at 82 rather than 90 because LiveCodeBench v6 is 80.3 — *behind* both comparators on the same page (Bonsai 2 at 90.07, Qwen 3.8 27B FP16 at 90.05) — and because SciCode, DeepSWE and Vibe Code Bench are unpublished and every coding figure is vendor-sourced with no independent replication.
- **Cost efficiency: 100/100.** $0.00/$0.00 — Apache-2.0 open weights, a free OpenRouter route (`recursive/flint-v1.0:free`) and a free OpenCode Zen route (`flint-40b-free`). The methodology's "$0 = 100" rule applies directly. The only discounts are non-price: the Zen route retains data for 30 days and may use it for training, and self-hosting a 40B MoE costs real GPU time.
- **Overall Score: 60/100.** Mean of the five quality dims (70 + 60 + 74 + 15 + 82 = 301 ÷ 5 = 60.2, half-up → 60). Best fit: zero-cost local agentic coding at 262K context, where SWE-bench-class ability and 95-100 tok/s local decode make it one of the strongest free options. Worst fit: long-context work past ~115K (throughput collapses to ~9 tok/s independently measured), multimodal work, and any case where vendor-sourced benchmarks without independent replication are insufficient evidence — which, for this three-day-old model, is every number in this file.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across four independent source families (Recursive's Hugging Face model card, the Ollama library entry, Recursive's launch post, and models.dev/OpenRouter catalog records), supplemented by an independent GGUF quantization repo with llama-bench measurements, one independent review, and checked-and-empty Artificial Analysis and Bing searches; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: every Flint benchmark is **single-sourced from the vendor** — Artificial Analysis has no page (404) and no independent benchmarker publishes Flint scores, so the SWE-bench and Terminal-Bench figures carry no replication. The one independent quantitative finding, ~9 tok/s at ~115K context, is a negative and is reflected in the Context-window score.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
