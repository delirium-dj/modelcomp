# Grok 4.20 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok 4.20 (`x-ai/grok-4.20`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (no "Free"-tier wording; there is no free tier of any kind)
- **Short description:** xAI's long-context release between Grok 4.1 and Grok 4.3, using a four-agent "council" (Grok coordinator, Harper research, Benjamin math/code, Lucas synthesis) at inference time over a 2M-token window; strongest for document/PDF-scale ingestion and structured agentic flows, weakest at ultra-long-horizon autonomy. Not a variant of any other tracked entry (the multi-agent/Heavy configuration is a mode of the same model).
- **Provider / access:** xAI API (`api.x.ai`, Chat Completions, OpenAI-compatible), OpenRouter `x-ai/grok-4.20`, plus Fireworks AI, Together AI and Microsoft Azure. Variants: reasoning, non-reasoning, and the multi-agent council; a 16-agent "Heavy" mode is reported at high effort.
- **Release / knowledge:** public beta 2026-02-17; API GA 2026-03-18. Knowledge cutoff reported as Sep 2025 by one tracker and undisclosed by the vendor card sites.
- **IDs:** `x-ai/grok-4.20` (OpenRouter) / `grok-4.20` on xAI's own API. No OpenCode Zen Free ID and no free tier — cost is scored on paid pricing.
- **Context window:** 2,000,000 tokens with up to 1,800,000 max output (tracker + vendor-checked review page). Provider-listed capacity; no vendor-published retrieval curve.
- **Modalities:** text, image and PDF/file input; text output; reasoning yes; tool calls; JSON mode. No audio and no video input, no media output.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input and $2.50 / 1M output; cached input $0.20 / 1M (~84% saving). Launch pricing was $2.00/$6.00. Requests are billed the same across reasoning, non-reasoning and multi-agent variants.
- **Architecture:** proprietary Mixture-of-Experts (estimated ~1.7–3T total parameters, undisclosed; MoE + parallel-agent council). xAI's internal testing claims the four-agent design cuts hallucination from ~12% (single-model baseline) to ~4.2%.

### Raw benchmarks found

> Sources: Artificial Analysis, BenchmarkList (91 measured rows for this ID),
> HokAI's vendor-checked review page, modelgrep and the AI BENCHY leaderboard.
> Harness disagreements are shown side by side rather than averaged.

Agent / tool use:

- Terminal-Bench 2.1: **44.2%** (59th percentile, rank 76 of 182 — BenchmarkList)
- Terminal-Bench 2.0: **40.4%** (51st percentile, rank 34 of 68); Terminal-Bench Hard: **40.9%** (91st percentile, rank 30 of 326); Long-Horizon Terminal-Bench: **0.1** (0th percentile, rank 21 of 21)
- Tau2-Bench Telecom: **96.5%** (rank 11 of 332); Tau²-Bench (agentic, AA harness): **93%** (modelgrep)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **1,171 Elo** (81st percentile, rank 66 of 340)
- Claw Bench: **92** (58th percentile, 16 of 37); ClawProBench: **43.04** (9th percentile, 44 of 48); WildClawBench: **19.3%** (0th percentile, 36 of 36)
- Also measured: Vending-Bench 2 4,662.85 (51st pct), PinchBench 83.3%, AutoBench 3 (68th pct), Agent Island 0.98, TERMS-Bench 60.1%, HiL-Bench 8.0%, APEX-Agents-AA 14.2%
- AI BENCHY practical suite: **rank #165 of 364** at medium effort (aibenchy.com snapshot 2026-09-24; score value not extractable, treated as rank-only)

Reasoning / knowledge:

- GPQA Diamond: **88.6%** (BenchmarkList, 78th percentile) / **88.9%** (HokAI, vendor-checked) / **91%** (modelgrep citing Artificial Analysis)
- HLE: **34.5%** (90th percentile, rank 46 of 466)
- MMLU-Pro: **86.6%** (HokAI)
- AIME (2025): **~95%** on the standard four-agent variant; **96.5%** in the BenchmarkList row (94th percentile) — the 16-agent Heavy mode is reported as a perfect score
- Artificial Analysis Intelligence Index: **38** (v4.3.2, 84th percentile, rank 69 of 418 — BenchmarkList) vs **26** for the "0309 v2" release on AA's own release page vs **25.7** for the multi-agent entry on modelgrep — variants/configs diverge, so treat the composite as version-specific
- AA-LCR v1.1 (long-context reasoning): **62.3%** (67th percentile, rank 135 of 409)
- ARC-AGI-2: **65.1%**; ARC-AGI-1: **89.5%**; AIIQ Composite IQ: **123**; NYT Connections Extended: **90.4%**; ObviousBench: **98.6%**; IFBench: **82.9%**
- LMArena Elo: **1505–1535** (provisional, March 2026); AA-Omniscience accuracy / hallucination rate: **no verified public score found** (the 4.2% hallucination figure is xAI internal testing, not a public harness)

Coding:

- SWE-bench Verified: **72.2%** (42nd percentile, rank 42 of 72 — BenchmarkList) / **75%** (HokAI, vendor-checked) — harness/version disagreement, both listed
- LiveCodeBench: **84.3%** (75th percentile, rank 32 of 123)
- SciCode: **45.6%** (88th percentile, rank 57 of 458)
- Vibe Code Bench v1.1: **4.1%** (13th percentile, rank 62 of 71); IOI: **30.2%** (70th percentile); ALE-Bench: **1,150.28**; WebDev Arena: **1,373.64 Elo**
- SWE-bench Pro / DeepSWE / Coding Index: **no verified public score found**

Long context:

- AA-LCR: **62.3%** (67th percentile) is the only retrieval-style datapoint found; MRCR / RULER / GraphWalks: **no verified public score found**. The 2M window is a vendor/listing figure, and AA's own release page lists 2M context with text+image input for the 0309 v2 revision.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at 44.2% and TB2.0 at 40.4% are mid-tier, GDPval-AA 1,171 sits comfortably in the 900–1200 mid band, and Tau2-Telecom 96.5% is strong but telecom-specific. What caps it: no Tau3-Banking or OSWorld/AutomationBench run, and a documented agentic tail (ClawProBench 9th percentile, WildClawBench 0th, Long-Horizon Terminal-Bench 0.1 with rank 21 of 21).
- **Reasoning: 80/100.** GPQA Diamond 88.6–91%, MMLU-Pro 86.6%, AIME ~95–96.5% and ARC-AGI-2 65.1% are near-frontier for a Feb/Mar 2026 release. HLE 34.5% (below the 40%+ frontier reference) and a version-dependent AA Intelligence Index (38 / 26 / 25.7) keep it out of the 90s.
- **Context window: 95/100.** A 2M-token window with a 1.8M output ceiling lands at the top of the ≥1M tier (95–100). It does not reach 100 because the only retrieval datapoint, AA-LCR 62.3%, is far from the ≥98%-at-512K bar.
- **Multimodal: 65/100.** Text, image and PDF/file input with text output is the +image-in band (60–70); no audio, no video, no media generation.
- **Coding: 72/100.** LiveCodeBench 84.3% and SciCode 45.6% are solid, but SWE-bench Verified 72.2% (42nd percentile) is mid-pack, Vibe Code Bench 4.1% shows the repo-level gap, and IOI 30.2% trails contest specialists.
- **Cost efficiency: 89/100.** $1.25 in / $2.50 out per 1M (cache $0.20, ~84% saving) is priced at the methodology's ~$1.25-blended band (~88–90); there is no free tier, so nothing lifts it above 90.
- **Overall Score: 76/100.** (68 + 80 + 95 + 65 + 72) / 5 = 76.0 → **76**. Best fit: long-document/PDF ingestion plus telecom-style tool flows; not long-horizon autonomy or repository-scale coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-25 UTC
- Method: public internet research across Artificial Analysis (release page + cited figures), BenchmarkList's measured-row profile, HokAI's vendor-checked review, modelgrep's OpenRouter-derived specs and the AI BENCHY leaderboard; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
