# Kimi K2.7 Code HighSpeed — findings by Step 5 Preview

- Source: Moonshot AI (`kimi-k2.7-code-highspeed` — high-speed tier of Kimi K2.7 Code)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** The high-speed serving tier of Kimi K2.7 Code — the identical 1T/32B-active MoE weights streamed at ~180 tokens/s (up to ~260 in short-context runs, roughly 5–6x the standard tier), targeted at interactive coding agents where output latency dominates. Moonshot prices it as a flat 2x on every billed line; capability is unchanged.
- **Provider / access:** Moonshot API (`kimi-k2.7-code-highspeed`, platform.kimi.ai); Vercel AI Gateway `moonshotai/kimi-k2.7-code-highspeed`; Kimi Code CLI (HighSpeed tier, Allegretto plan or above). Standard tier: `kimi-k2.7-code`; weights `moonshotai/Kimi-K2.7-Code` (Modified MIT).
- **Release / knowledge:** 2026-06-15/16 (beta at the June 12 K2.7 Code launch). Knowledge cutoff not disclosed.
- **IDs:** `kimi-k2.7-code-highspeed` (Moonshot/Vercel).
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** Text, image and video in → text out; **thinking mode mandatory** (reasoning tokens bill as output); fixed sampling (temperature 1.0, top_p 0.95).
- **Pricing (as of 2026-10-09):** $1.90 / MTok input, $0.38 cached, $8.00 output — exactly 2x the standard tier ($0.95 / $0.19 / $4.00). Effective input ~$0.84/M in an agent loop dominated by cache reads.
- **Architecture:** MoE, 1T total / 32B active (384 experts, 8+1 shared, 61 layers, MLA), MoonViT 400M vision encoder, native INT4 (~595GB).

### Raw benchmarks found

(Identical weights to Kimi K2.7 Code — the K2.7 Code evidence base applies; no separate HighSpeed benchmark rows exist.)

Coding (vendor + independent):

- SWE-bench Verified: **78.2%** (Vals AI — #1 open-weights; matches Opus 4.6 Thinking and GPT-5.4 xhigh)
- Terminal-Bench 2.1: **67.04%** (Vals — #1 open-weights); Terminal-Bench Hard: 44.7%
- Vibe Code Bench: **47.21%** (Vals, #3 open-weight); LiveCodeBench: 82.05% (Vals, #8 open-weight)
- Kimi Code Bench v2 (in-house): 62.0 (K2.6 50.9, GPT-5.5 69.0, Opus 4.8 67.4); Program Bench: 53.6; MLS Bench Lite: 35.1; Terminal-Bench 4.0: 1.0% (AA)

Agentic:

- MCPMark Verified: **81.1%** (first open-weights model above Opus 4.8's 76.4%); MCP Atlas: 76.0%; Kimi Claw 24/7 Bench: 46.9%
- ~30% fewer reasoning tokens than K2.6 on the same tasks

Reasoning / knowledge (AA):

- AA Intelligence Index: 25.8; GPQA Diamond: 89.6%; HLE: 35%; SciCode: 47.8%; IFBench: 63.1%; AA-LCR: 79.3%; CritPt: 10%

Multimodal:

- MMMU-Pro (inherited K2.6-class MoonViT evidence): 79.4–86.3%; text + image + video in → text out

### Normalized scores (1–100)

- **Tool use: 68/100.** MCPMark Verified 81.1% (above Opus 4.8), MCP Atlas 76.0% and Terminal-Bench 2.1 67.04% (both #1 open-weights on Vals) are solid mid-frontier agentic evidence; capped by Kimi Claw 24/7 Bench 46.9% and Terminal-Bench 4.0 at 1.0%.
- **Reasoning: 76/100.** GPQA 89.6%, HLE 35% and SciCode 47.8% are solid for a coding-tuned model; capped by CritPt 10%, the AA Intelligence Index of 25.8 and IFBench 63.1%.
- **Context window: 76/100.** 262,144-token window in the 200K–500K band with AA-LCR 79.3%; the 1M-window models in this comparison out-rank it.
- **Multimodal: 76/100.** Native text + image + video in → text out is the 75–90 band on the inherited MoonViT evidence (MMMU-Pro 79.4–86.3%); no audio input or non-text output.
- **Coding: 76/100.** SWE-bench Verified 78.2% and Terminal-Bench 2.1 67.04% are both #1 open-weights on Vals' independent harnesses, with Vibe Code Bench 47.21% (#3 open) and LiveCodeBench 82.05%; capped by Program Bench 53.6%, MLS Bench Lite 35.1% and Terminal-Bench 4.0 at 1.0%.
- **Cost efficiency: 75/100.** $1.90/$8.00 per MTok (2x the standard tier, cache reads $0.38) sits between the methodology's ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 tiers — you pay double for identical output, justified only when latency is the binding constraint.
- **Overall Score: 74/100.** Best-fit recommendation: for interactive coding agents where 180–260 tok/s changes the experience — identical Kimi K2.7 Code quality (both Vals #1 open-weights coding rows) at 2x token price; batch/overnight work belongs on the standard tier.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Moonshot/Kimi pricing docs + quickstart + what's-new, Vercel AI Gateway, Command Code, benchr, modelbenchmark.io, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
