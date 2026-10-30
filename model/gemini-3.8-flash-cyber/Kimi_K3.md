# Gemini 3.8 Flash Cyber — findings by Kimi K3

- Source: Google / Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-24; **no new verified data found** — variant absent from Artificial Analysis, OpenRouter, and OpenCode Zen as of 2026-10-13; all scores remain provisional on the single launch-post CWE-Bench row + family proxies)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Security-specialized sibling of Gemini 3.8 Flash (same launch, September 2, 2026) tuned for vulnerability research, patching, and defensive security workflows; sits on the CWE-Bench Pareto frontier per Google's launch post.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash-cyber`), AI Studio.
- **Release / knowledge:** Released 2026-09-02 alongside 3.8 Flash (blog.google launch post); knowledge cutoff ~March 2026 (family).
- **IDs:** `google/gemini-3.8-flash-cyber`. **Second-pass availability check (2026-10-13):** NOT in OpenCode Zen `/zen/v1/models` listing (plain `gemini-3.8-flash` is), NOT on OpenRouter, NOT indexed by Artificial Analysis — the variant remains Google-first-party-only; a general `gemini-3.8-live` sibling exists in models_voice.
- **Context window:** 1M tokens (family spec; marked provisional for this variant — no variant-specific measurement).
- **Modalities:** text/image in (family); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** family pricing $0.75/M in / $3.75/M out (still provisional — no variant-specific sheet found on this pass either).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- CWE-Bench (Collinear, vulnerability patching): **47.2%** pass@1 — vs "a leading frontier model at 47.8%", at significantly lower cost; on the Pareto frontier (blog.google launch post — still the only variant-specific measured row as of 2026-10-13)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval for this exact variant: no verified public score found (re-checked 2026-10-13 — none of the aggregators list this variant; CyberGym/ExploitBench coverage exists only for GLM-5.3 in this niche)

Reasoning / knowledge:

- All rows: no verified public score found for this exact variant (3.8 Flash base: AA Intelligence Index 40.9, GPQA-D 95.3%, HLE-Verified 54.9% — provisional proxies from the shared base weights; not re-verified)

Coding:

- CWE-Bench 47.2% (verified above)
- Other coding rows for this exact variant: no verified public score found (3.8 Flash base: DeepSWE 73.8%, SWE-bench Vals 80% — provisional proxies)

Long context:

- No variant-specific retrieval measurement found (family 1M window; 3.8 Flash base AA-LCR 81.3% provisional).

Multimodal:

- No variant-specific rows found; family image/audio/video/PDF input (provisional).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged from first pass — no new evidence found in the second pass.**

- **Tool use: 80/100.** CWE-Bench 47.2% (near-frontier patching) verified; capped because only one variant-specific agentic row exists, rest provisional proxies from base.
- **Reasoning: 78/100.** Provisional: base 3.8 Flash is strong (GPQA 95.3%, HLE-V 54.9%); cyber tuning typically shifts general reasoning slightly. Capped by absence of independent rows.
- **Context window: 86/100.** Family 1M window; capped by zero variant-specific retrieval evidence.
- **Multimodal: 80/100.** Family input breadth; no variant-specific vision rows; text-only output.
- **Coding: 82/100.** CWE-Bench 47.2% pass@1 is elite patching evidence; broad coding figures provisional from base (DeepSWE 73.8%).
- **Cost efficiency: 80/100.** Family Flash pricing ($0.75/$3.75, provisional) — exceptional for security-tuned capability at that cost point.
- **Overall Score: 81/100.** Mean of the five quality dims (80+78+86+80+82)/5 = 81.2 → 81 (unchanged). Best fit: defensive security / vuln-patching pipelines where CWE-Bench Pareto position and Flash pricing align. Confidence caveat: one measured row carries this file; treat scores as provisional until independent trackers index the variant.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenCode Zen `/zen/v1/models` listing 2026-10-13, OpenRouter `google/gemini-3.8-flash-cyber` lookup, Artificial Analysis `gemini-3-8-flash-cyber` lookup — all negative for this variant; no tracker has added coverage since the launch-post CWE-Bench figure). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
