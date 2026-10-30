# MiMo V2.5 Free — findings by GPT-6 Luna

- Source: Xiaomi/MiMo-V2.5 (historically exposed through a free OpenCode route)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** The tracked Free name is an access-tier reference to Xiaomi's base MiMo-V2.5 multimodal model, not a distinct checkpoint from the open-weight MiMo-V2.5. The underlying model is a 310B-total / 15B-active sparse MoE for multimodal understanding and agentic tasks; it is separate from the much larger, text-focused MiMo-V2.5-Pro.
- **Provider / access:** Xiaomi's API model ID `mimo-v2.5` was retired on **2026-10-21 at 10:00 UTC+8**; Xiaomi's current notice says the ID no longer works. The open weights remain downloadable as `XiaomiMiMo/MiMo-V2.5` from Hugging Face under MIT terms. The tracked OpenCode Console ID `opencode/mimo-v2.5-free` is no longer in OpenCode's current model endpoint; the current Free listing includes MiMo-V2.6-Flash Free instead. Therefore this report treats “Free” as the historical hosted tier, not as currently available Xiaomi API access.
- **Release / knowledge:** Xiaomi announced MiMo-V2.5 on **2026-04-22**. Xiaomi later announced the model weights for global developers under MIT (announcement page updated **2026-06-29**). No exact knowledge-cutoff date was found.
- **IDs:** Xiaomi API ID (retired): `mimo-v2.5`; open checkpoint: `XiaomiMiMo/MiMo-V2.5`; historical tracked OpenCode route: `opencode/mimo-v2.5-free` (not listed in the current endpoint catalog).
- **Context window:** Native model/checkpoint supports up to **1,000,000 tokens**; the separate MiMo-V2.5-Base checkpoint is **256K**. A prior OpenCode free-route snapshot tracked for this entry listed a **200K total / 32K output** serving cap; that route cap is not the native model limit, and the route is no longer in OpenCode's current catalog. No verified final-checkpoint result establishes ≥98% retrieval at 512K+.
- **Modalities:** Text, image, video, and audio understanding in; text out. The official model card describes a dedicated vision encoder and audio encoder. Vals AI's independent evaluation listing advertises text and image input only; treat that as its tested API/provider capability, not a redefinition of the checkpoint's vendor-documented modalities.
- **Pricing (as of 2026-10-29):** There is no current Xiaomi hosted price for `mimo-v2.5`, because Xiaomi retired that API ID. Vals AI's model page records **$0.14 input / $0.28 output per 1M tokens** for the Xiaomi-provider evaluation, but that is a historical third-party snapshot, not a currently purchasable rate. OpenCode previously exposed this entry as a time-limited free route; its current API catalog no longer lists it. The open-weight license permits use without a model royalty, but self-hosting a 310B model still has substantial hardware and operating costs. Historical free-tier privacy terms were not independently recovered; do not transfer current MiMo-V2.6-Flash Free terms to V2.5.
- **Architecture:** Sparse MoE with **310B total / 15B active parameters**, 256 routed experts with 8 experts per token, 48 language-model layers, hybrid sliding-window/global attention (5:1 ratio; 128-token SWA window), a 729M-parameter 28-layer vision transformer, a 261M-parameter 24-layer audio transformer, and three MTP modules (329M parameters). Xiaomi says it was trained on approximately **48T tokens** and progressively extended to 1M context. The checkpoint is open-weight under MIT; it is not the Pro checkpoint.

### Raw benchmarks found

Vendor claims, official checkpoint metadata, and independent provider evaluations are separated below. The vendor and Hugging Face leaderboard values for Claw-Eval differ slightly, and Vals AI's API results are not identical to the vendor's own harness results.

Agent / tool use:

- Claw-Eval general subset: **62.3** in Xiaomi's launch page; the official Xiaomi Hugging Face card's linked leaderboard metadata shows **62.1 Pass³%**, **N=3**, **161 tasks**. Keep the two source-specific figures; they are close but not identical and the page labels differ.
- Terminal-Bench 2.0: **65.8%** (Hugging Face model-card evaluation row).
- Terminal-Bench 2.1: **60.67% ± 5.21** (Vals AI independent evaluation; default provider listed as Xiaomi).
- No verified MiMo-V2.5 base-model GDPval-AA or Tau3-Banking score found. Xiaomi's GDPval-AA “first among open-source models” statement refers to **MiMo-V2.5-Pro**, not this base model.

Reasoning / knowledge:

- GPQA Diamond: **81.57% ± 2.05**; MMLU-Pro: **82.93% ± 0.37** (Vals AI, independent Xiaomi-provider evaluation).
- No exact-version HLE, Intelligence Index, or CritPt result was verified in the sources reviewed.

Coding:

- SWE-bench Pro: **56.1%** (official Xiaomi Hugging Face model-card evaluation row).
- SWE-bench (Vals AI page label; not identified there as Verified or Pro): **71.00% ± 2.03**; LiveCodeBench: **81.51% ± 1.07**; Vibe Code Bench v1.1: **42.17% ± 4.57** (Vals AI, independent Xiaomi-provider evaluation). Do not merge the generic SWE-bench score with the distinct SWE-bench Pro score.
- Xiaomi describes strong performance on its internal MiMo Coding Bench but does not expose a numeric score in the launch page's text. No verified SciCode or DeepSWE result found.

Multimodal / long context:

- MMMU-Pro: **80.00% ± 0.96** (Vals AI; the page lists the tested input modalities as text and image).
- Xiaomi documents text, image, video, and audio understanding and a native **1M-token** checkpoint; the official model card lists separate multimodal and GraphWalks long-context evaluation charts but no machine-readable numeric table in the accessible text.
- Vals AI's current page marks video input as unsupported, while Xiaomi's model card says video understanding is supported. This capability discrepancy is preserved rather than assuming that one provider's API settings define all deployments.

### Normalized scores (1–100)

- **Tool use: 73/100.** Claw-Eval is about 62% in Xiaomi's and the official card's reporting, while Terminal-Bench 2.1 is 60.67%; these are solid agent results but well below the methodology's ~88% frontier reference. No base-model GDPval-AA or Tau3 result was verified.
- **Reasoning: 77/100.** GPQA Diamond is 81.57% and MMLU-Pro is 82.93%, useful evidence of strong broad knowledge, but no HLE, Intelligence Index, or equivalent frontier-level score was verified.
- **Context window: 95/100.** The native checkpoint documents 1M tokens, meeting the methodology's ≥1M floor. No verified final-checkpoint result demonstrates ≥98% retrieval at 512K+; the old free-hosted route had a lower serving cap and is discontinued.
- **Multimodal: 92/100.** Xiaomi documents image, video, and audio understanding, which qualifies for the methodology's audio-input band. Independent Vals metadata only confirms text/image in its evaluation setup, and output is text-only.
- **Coding: 78/100.** SWE-bench Pro is 56.1%, LiveCodeBench 81.51%, and Terminal-Bench 2.1 60.67%; this is capable coding performance, but the Pro/Terminal results sit below the methodology's frontier references and SciCode/DeepSWE evidence is absent.
- **Cost efficiency: 100/100 for the historical free route only.** OpenCode's tracked route was free, but time-limited and no longer present in the current endpoint catalog; this is not a claim of current availability. The methodology excludes cost from the Overall Score.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions `(73 + 77 + 95 + 92 + 78) / 5 = 83`; best supported for multimodal agent workflows where a native long window and open weights matter, but the currently tracked free hosted route has been retired.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent public searches, Xiaomi's official model release and retirement/API documentation, the XiaomiMiMo Hugging Face model card, the current OpenCode Console endpoint/free-model catalog, and Vals AI / BenchLM independent listings. The official Claw-Eval values, independent benchmark harnesses, provider-specific modalities, route-specific caps, and model retirement status are kept distinct. Scores are normalized interpretations, not Xiaomi ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
