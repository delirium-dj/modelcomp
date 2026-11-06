# Xing 4.0 29B A4B — findings by Step 5 Preview

- Source: China Telecom AI / XingChen-AGI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B (repo folder `xing_4.0_29b_a4b`). China Telecom AI's **agent-oriented open-weight MoE** — the Xing series, formerly TeleChat: **29B total / 4B active, native 256K context extensible to 512K**, and **the first model of this scale trained entirely on Huawei Ascend NPUs with MindSpore**. **A negative finding governs this report: BenchLM carries no page for this model in any spelling** (`xing-4.0-29b-a4b`, `Xing_4.0.29B_A4B` and the repo spelling all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A genuinely cheap agentic-coding workhorse: **Tau3-Bench 64.63%, Claw-Eval 76.55%, SWE-bench Verified 75.0% (SWE-agent), AIME 2026 90.0% and DeepresearchBII 60.8%** — at **$0 on OpenRouter's free route** and **Apache 2.0** weights running 4-bit on a single 24GB-class GPU. Its caps are **Terminal-Bench 2.1 57.5%, AA-LCR 61.0% and the total absence of any GDPval-AA, OSWorld, MCP-Atlas, GPQA Diamond or HLE figure.**
- **Provider / access:** Self-host weights — Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (**Apache 2.0**; BF16 plus community FP8/w8a8/GGUF/4-bit builds, **~15GB VRAM at 4-bit**); OpenAI-compatible API. OpenRouter lists a **free route** `xingchen-agi/xing4.0-29b-a4b:free` at $0/$0. **No OpenCode Zen route.**
- **Release / knowledge:** model card live (papers: TeleChat3-MoE arXiv 2512.24157, Dec 2025; TeleChat2/2.5/T1 arXiv 2507.18013). **Knowledge cutoff not separately disclosed.**
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF/served name); `xingchen-agi/xing4.0-29b-a4b:free` (OpenRouter).
- **Context window:** **262,144 tokens (256K) native, extensible to 512K** (official model card; OpenRouter lists 262,144).
- **Modalities:** **text in; text out** (HF pipeline "Text Generation"); thinking mode via chat template (`enable_thinking`); tool calling and multi-step planning; agent-framework adaptation for OpenCode, Claude Code, OpenClaw, Hermes.
- **Pricing (as of 2026-11-06):** **$0 / $0 on the OpenRouter free route; self-hostable under Apache 2.0.**
- **Architecture:** **MoE — 29B total / 4B active**, 40 layers, hidden size 3584, MLA attention, 64 routed experts (4 active) + 1 shared expert, mHC + MLA + MTP; **trained on Ascend 910C clusters (MindSpore/MindFormers) with ~96% throughput gain over baseline.**

### Raw benchmarks found

Vendor-reported throughout, carried from the prior verified research pass (2026-10-19) and re-attributed; no tracker catalog page exists for cross-check. **The Ascend/NPU training provenance is the model's most distinctive property and is recorded as such.**

- Agentic: Tau3-Bench 64.63%; Claw-Eval 76.55%; Terminal-Bench 2.1 57.5%; DeepresearchBII 60.8%
- Reasoning: AIME 2026 90.0%; AA-LCR 61.0%
- Coding: SWE-bench Verified 75.0% (SWE-agent); SWE-bench Multilingual 66.0%; Terminal-Bench 2.1 57.5%
- **No verified public score found** for GDPval-AA, OSWorld, MCP-Atlas, GPQA Diamond, HLE, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench or any multimodal benchmark.

### Normalized scores (1–100)

- **Tool use: 75/100.** Above the mid band. **Tau3-Bench 64.63% clears the ~50% frontier reference and Claw-Eval 76.55% is a strong agentic result**, while Terminal-Bench 2.1 57.5% and DeepresearchBII 60.8% sit mid-band. Capped by the absence of any GDPval-AA, OSWorld or MCP-Atlas figure and by **all numbers being vendor-reported**.
- **Reasoning: 70/100.** Mid-band. **AIME 2026 90.0% is genuinely strong** and AA-LCR 61.0% is upper-mid, but **no GPQA Diamond, HLE, CritPt or Intelligence Index figure exists**, so the top of the mid band is the defensible ceiling.
- **Context window: 74/100.** 256K native (extensible to 512K) verified on the official card — inside the methodology's 200K–500K band (65–84) toward its top given the documented 512K extension path; **AA-LCR 61.0% supports but does not earn the 85+ tier**.
- **Multimodal: 15/100.** **Text-only input and output** per the official card — squarely in the methodology's text-only 10–20 band.
- **Coding: 74/100.** Mid-band. **SWE-bench Verified 75.0% (SWE-agent) and SWE-bench Multilingual 66.0% are solid mid-plus** and Terminal-Bench 2.1 57.5% is mid-band, but no LiveCodeBench, SciCode, DeepSWE or Vibe figure exists, keeping it below the 90+ frontier tier.
- **Cost efficiency: 100/100.** **Free route on OpenRouter ($0 input/output) plus Apache 2.0 weights for self-hosting (4-bit build on a single 24GB-class GPU)** — the methodology's $0 anchor.
- **Overall Score: 62/100.** (75 + 70 + 74 + 15 + 74) / 5 = 61.6 → **62** → **62**. Recommendation: a **remarkably cheap (free) open-weight agentic-coding workhorse for budget deployments** — SWE-bench ~75% and Tau3 ~65% at zero per-token cost on a single consumer GPU. Caveats: **every score is vendor self-reported** and the reasoning/multimodal evidence is thin. Its **Ascend 910C training provenance** is the model's most distinctive property and matters for anyone tracking domestic-China silicon supply chains.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no page for this model in any spelling** (`xing-4.0-29b-a4b`, `Xing_4.0.29B_A4B` and the repo spelling `xing_4.0_29b_a4b` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-19), with figures re-attributed to the official model card and the cited arXiv papers, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. Because all rows are vendor self-reported, **that provenance is flagged at the tool-use dimension rather than left implicit**, since a self-reported Claw-Eval 76.55% carries different weight than a leaderboard-measured one. **A slug-identity note is recorded: the repo folder uses underscores (`xing_4.0_29b_a4b`) while both BenchLM and OpenRouter use hyphens/dots, and no tracker page exists under any spelling** — so no dotted-slug trap could be resolved and the model is tracker-absent by fact, not by misspelling. The **Ascend 910C / MindSpore training provenance and the ~96% throughput gain over baseline** are surfaced as the model's most distinctive property. Missing benchmarks (GDPval-AA, OSWorld, MCP-Atlas, GPQA Diamond, HLE, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, and every multimodal benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — XingChen-AGI/Xing4.0-29B-A4B model card (Apache 2.0, official source)](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - [OpenRouter — `xingchen-agi/xing4.0-29b-a4b:free` (the $0/$0 free route)](https://openrouter.ai/xingchen-agi/xing4.0-29b-a4b:free)
  - [arXiv — TeleChat3-MoE (2512.24157)](https://arxiv.org/abs/2512.24157)
  - [arXiv — TeleChat2/2.5/T1 (2507.18013)](https://arxiv.org/abs/2507.18013)
  - [Repo curated meta — `model/xing_4.0_29b_a4b/meta.json`](/model/xing_4.0_29b_a4b/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
