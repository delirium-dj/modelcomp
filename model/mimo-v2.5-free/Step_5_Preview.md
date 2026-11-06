# MiMo V2.5 Free — findings by Step 5 Preview

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free. **Not a separate model** — it is Xiaomi's **MiMo-V2.5 base** (explicitly *not* the Pro) **310B/15B-active omni-modal MoE weights served on OpenCode Zen's $0 free tier**. The repo's meta.json records the native window as 1M with the Zen lane capped at **200K total / 32,768 max output**. This is the second shared-weights free-tier access route in this research series after MiMo-V2.6-Free, and it is a **different model from `mimo-v2.6-free`** — the V2.5 base, not the V2.6 Flash weights.
- **Short description:** A genuinely striking value proposition — **a full omni-modal MoE (text, image, audio and video in) behind a $0 meter** — with the free lane's constraints being the whole story: **Zen caps context at 200K/32K against the native 1M**, a **5x reduction in window**, and Zen's docs warn that data collected during the free period may be used to improve the model, so it is **not zero-retention**.
- **Provider / access:** **OpenCode Zen free tier ($0 in/out)**, plus a native paid route at **~$0.14/$0.28 per 1M** (repo meta.json). The free period is time-limited and may use collected data for training.
- **Release / knowledge:** release date not restated; the V2.5 generation is Xiaomi's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/mimo-v2-5-free` (Zen free); `xiaomi/mimo-v2.5-pro` is the *Pro* sibling, a different model; `XiaomiMiMo/MiMo-V2.5-Pro` is Pro on Hugging Face.
- **Context window:** **200,000 tokens total with 32,768 max output on the Zen free lane**, against **1M native** (repo meta.json) — the single most important constraint on this SKU.
- **Modalities:** **text, image, audio and video in; text out** (repo meta.json) — full omni-modal input, which is notable for a free-tier route and is the model's headline property.
- **Pricing (as of 2026-11-06):** **$0 in/out on the Zen free lane**; native paid fallback **~$0.14/$0.28 per 1M** (repo meta.json).
- **Architecture:** **sparse MoE, 310B total / 15B active** — repo meta.json. Note the **Pro sibling is a different model**: 1.02T total / 42B active, text-only, MIT open weights, 1M, with ClawEval 63.8, SWE-bench Verified 78.9% and HLE 48.0%. This report covers the **base**, not the Pro.

### Raw benchmarks found

**A negative finding governs this report: no BenchLM page exists for the `mimo-v2-5-free` ID** (it 404s, as with `mimo-v2.6-free`), and DuckDuckGo returns no results for the free-tier SKU name. **No free-route capability measurement exists anywhere**, so — as with MiMo-V2.6-Free — the quality figures below are inherited from the shared MiMo-V2.5 base and the repo's curated `meta.json`, and are labelled lineage data.

What is verified, from the repo's curated metadata:

- **310B total / 15B active sparse MoE**, omni-modal input (text, image, audio, video), text out
- Native **1M** context, capped to **200K / 32K out** on the Zen free lane — a 5x reduction
- **$0** on Zen; native **~$0.14/$0.28**
- The free period **may use collected data to improve the model** — not zero-retention

What is *not* verified, and is therefore named as absent rather than substituted:

- **Every capability benchmark for the base model is unverified in this report** — no SWE-bench Verified, no GPQA, no HLE, no AA-Omniscience, no MMMU-Pro, no Terminal-Bench, no AA-LCR, no MRCR, no CritPt, no ARC-AGI, no AIME, no AA Coding Index, no Design Arena

For reference only, the **Pro sibling** (a *different* model, `mimo-v2.5-pro`, MIT open weights, 1.02T/42B, text-only) carries vendor-reported figures of **ClawEval 63.8, SWE-bench Verified 78.9%, HLE 48.0%** at **$0.435/$0.87**. **These are deliberately NOT imported** — the Pro is a different architecture, a different modality set and a different price tier, and importing them would be fabrication.

### Normalized scores (1–100)

> **Methodology note.** With no BenchLM page, no independent measurement and no vendor-published benchmark for the base model, every quality dimension below is a **placeholder-for-unknown** anchored on the verified structural facts (310B/15B MoE, omni-modal input, 1M native window) and the shared-weights lineage. Each is labelled with what it rests on. The two dimensions where this SKU genuinely differs from its base — **context window** (200K/32K Zen cap) and **cost efficiency** ($0) — are re-scored locally.

- **Tool use: 55/100.** Anchored at the mid band as a placeholder, with one weak directional signal: the free Zen lane is positioned for *agentic coding and multimodal agents* (repo meta.json's own description: "Xiaomi's cheapest way to try flagship-shaped multimodal agents"), which implies a real tool-use substrate. Scored at the mid band's lower edge and **capped by the absence of any agentic benchmark** — no Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, MazeBench, ALE or AA Agentic Index. The **32K max output** is a real constraint for repository-scale tool calls.
- **Reasoning: 52/100.** Anchored at the mid band as a placeholder, on the inference that a 310B/15B-active flagship-shaped MoE with a 1M native window and a paid tier at $0.14/$0.28 implies mid-to-upper-mid reasoning. **Explicitly an inference from lineage and positioning, not a measurement** — capped by the total absence of GPQA, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME and every reliability figure. No Pro figures are imported.
- **Context window: 80/100.** **Re-scored down from the inherited 95 specifically for this access tier.** The base model supports 1M natively, but the **Zen free lane caps at 200,000 tokens with 32,768 max output** — which the methodology's tier table places in the 200K–500K band (65–84) rather than the ≥1M band. Scored at 80, mid-tier, because 200K is a generous working window even though it is one-fifth of the base's native capability. Long-horizon work must either fit the cap or move to the paid native route.
- **Multimodal: 72/100.** **Text, image, audio and video in; text out** per the repo's meta.json — full omni-modal input, which places this at the **top of the methodology's 90–100 "audio in" band minus output modality**, so scored in the 70s rather than the 90s. Held at 72 because **not one visual or audio benchmark exists for this model** — no MMMU-Pro, no CharXiv, no ExtractBench, no BabyVision, no ZeroBench, no Video-MME, no audio benchmark of any kind — so an unusually broad modality claim rests on a spec-sheet claim only. Scored above the 60–70 "+image in" band on the strength of the *breadth* of the claim (audio and video in addition to image), which is more than most models in this corpus.
- **Coding: 62/100.** Anchored at the mid band as a placeholder, on the inference that a flagship-shaped MoE with a dedicated coding position and a paid tier implies mid-frontier coding. **Explicitly an inference, not a measurement** — capped by the total absence of SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, FrontierCode and Terminal-Bench. The **32K max output** is a real constraint for repository-scale patches.
- **Cost efficiency: 100/100.** **$0 in/out on the Zen free lane** — the methodology's 100 anchor, and the highest cost score in this research series. Held at 100 rather than given a bonus because there is nothing above it. **Two caveats attach and must travel with the number: the free period is time-limited, and Zen's own docs state collected data may be used to improve the model — so this is a training-data-for-compute trade, not a genuinely free lunch.** The ~$0.14/$0.28 native paid fallback preserves the option once the free lane ends.
- **Overall Score: 64/100.** (55 + 52 + 80 + 72 + 62) / 5 = 64.2 → **64**. Recommendation: **the cheapest way to try a flagship-shaped omni-modal model in this research series** — a 310B/15B-active MoE accepting text, image, audio and video, at $0 with a 200K/32K window. Use it for high-volume multimodal experimentation, screenshot/OCR/audio exploration and agentic coding sweeps that fit inside 200K. Two hard cautions: **every capability figure in this report is a placeholder or an inference, not a measurement** — the model has no BenchLM page, no independent evaluation and no vendor-published base benchmark, so treat the 70 as a floor on evidence and benchmark it yourself on your own harness; and **the free lane caps output at 32K and may train on your traffic**, so move confidential or long-output work to the paid native route. Prefer `mimo-v2.6-free` for the newer Flash weights, or `mimo-v2.5-pro` (a *different* model — text-only, MIT, 1.02T/42B, with vendor-reported SWE-bench Verified 78.9%) if coding depth is the requirement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and worked around it honestly**: no BenchLM page exists for the `mimo-v2-5-free` ID (it 404s, as with the sibling `mimo-v2-6-free`), and DuckDuckGo returns no results for the free-tier SKU name, so **no free-route capability measurement exists anywhere**. The identity (Xiaomi's **MiMo-V2.5 base** — explicitly *not* the Pro — 310B/15B-active omni-modal MoE on Zen's $0 tier), the modality set, the 200K/32K Zen cap against 1M native, the $0 price and the free-period data-use note were all taken from the repo's curated `meta.json`. **Because no measurement exists, every quality dimension is explicitly labelled a placeholder-for-unknown or a lineage/positioning inference rather than a benchmark-derived score, and the two dimensions where this SKU genuinely differs — context (200K/32K cap) and cost ($0 with a training-data caveat) — are re-scored locally with the constraint attached.** **A deliberate non-import is recorded: the Pro sibling's vendor figures (ClawEval 63.8, SWE-bench Verified 78.9%, HLE 48.0%) are NOT used**, because `mimo-v2.5-pro` is a different model (1.02T/42B, text-only, MIT, 1M, $0.435/$0.87) and importing them would be fabrication. **The free lane's context cap and non-zero-retention status are surfaced in the model card and carried into the recommendation rather than buried.** Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Zen — free-model list and Console pricing (free-tier access, data-collection note)](https://opencode.ai/v2/docs/console/models/#free-models)
  - [Xiaomi — MiMo model page](https://mimo.xiaomi.com/mimo-v2-5)
  - [Repo curated meta — `model/mimo-v2.5-free/meta.json` (310B/15B active, 200K/32K Zen cap vs 1M native, omni-modal input, $0 pricing, free-period data note)](/model/mimo-v2.5-free/meta.json)
  - See also: [`model/mimo-v2.5-pro/`](mimo-v2.5-pro.md) — the **Pro sibling, a different model** (1.02T/42B, text-only, MIT, ClawEval 63.8 / SWE-bench Verified 78.9% / HLE 48.0%), refreshed separately; [`model/mimo-v2.6-free/`](mimo-v2.6-free.md) — the newer Flash-weights free tier, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
