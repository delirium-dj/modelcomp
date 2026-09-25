# Grok 4.20 — findings by Claude Sonnet 5

- Source: xAI/Grok 4.20 (developer field listed as "SpaceXAI" on Artificial Analysis and Vals AI trackers; API model ID `grok-4-20-0309`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (ships as Reasoning, Non-Reasoning, and Multi-Agent variants). No free-tier wording found for this model.
- **Short description:** xAI's March 2026 model positioned around fast agentic tool-calling, a 2M-token context window, and a low hallucination rate; used for long-document/large-codebase agentic and research work. Flag: benchmark trackers (Vals AI, Artificial Analysis) additionally list a distinct "Grok 4.20 0309 v2" revision (released April 2026) with different pricing and Intelligence Index scores — treated as a variant/alias below, not merged with the base model.
- **Provider / access:** xAI first-party API, model ID `grok-4-20-0309` (reasoning and non-reasoning). Also offered as a partner model on Google Cloud's Gemini Enterprise Agent Platform and on Oracle OCI Generative AI (reasoning + non-reasoning modes, on-demand or dedicated clusters). No verified Free ID found on OpenCode Zen. Chat Completions vs. Responses API not stated in any source found.
- **Release / knowledge:** Released 2026-03-10 (Artificial Analysis); Vals AI's first eval run is dated Mar 9, 2026. A "v2" revision released 2026-04-07 (Artificial Analysis). Training-data cutoff not stated in any source found.
- **IDs:** `xai/grok-4-20-0309` (reasoning/non-reasoning); Vals AI tracks it as `grok/grok-4.20-0309-reasoning`; Artificial Analysis tracks it as `grok-4-20-0309` (base) and `grok-4-20` (v2). No verified Free ID exists on OpenCode Zen.
- **Context window:** 2,000,000 tokens (2M) — consistent across Artificial Analysis, Vals AI, and MindStudio listings. No MRCR/RULER/GraphWalks retrieval score found to verify effective retrieval accuracy at that length.
- **Modalities:** text + image input; text-only output (Artificial Analysis). Reasoning: yes (dedicated Reasoning variant; a Non-Reasoning variant is also offered). Tool calls: yes, emphasized by xAI as a core capability. JSON mode: no verified public documentation found.
- **Pricing (as of 2026-09-25):** Base "Grok 4.20 0309": $2.00 / $6.00 per 1M input/output tokens, 90% cache-hit discount (Artificial Analysis). "v2" revision: $1.25 / $2.50 per 1M input/output tokens (Artificial Analysis). Separately, a Mar 25, 2026 news report (Winbuzzer, citing Artificial Analysis) states $20/$60 per 1M tokens with a $40/$120 long-context tier above 200K tokens — this conflicts with Artificial Analysis's own current model-page pricing and could not be reconciled; flagged as unverified/conflicting and not used in scoring. No confirmed free tier.
- **Architecture:** Proprietary; parameter count and MoE structure not disclosed (Artificial Analysis explicitly states this). Weights are not open.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.2%** (BenchLM.ai aggregator, citing a Vals AI Terminal-Bench 2.1 run; benchlm.ai/models/grok-4-20-beta)
- Terminal-Bench 2.0: **47.1%** (BenchLM.ai aggregator)
- Tau3-Banking / Tau2-Bench: no verified public score found (leaderboard entries located for other models, none for Grok 4.20)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.64%** (#6 of 138) (Vals AI launch update, Mar 13 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **48** (#8 rank; Index v4.0, per Winbuzzer report citing Artificial Analysis, Mar 25 2026) — **vs. 25** ("Grok 4.20 0309", Index v4.3.2, current Artificial Analysis model page) **/ 26** ("Grok 4.20 0309 v2", Index v4.3.2, current Artificial Analysis model page). The Index methodology changed versions between these two readings; both are reported as found rather than reconciled.
- Omniscience Accuracy / Hallucination Rate: **78% non-hallucination rate**, described as a record at launch (Winbuzzer, citing Artificial Analysis, Mar 25 2026); a separate accuracy figure was not found.

Coding:

- SWE-bench Verified: **74.20%** (#9 of 88) (Vals AI, Mar 13 2026 update) **/ 76.7%** (BenchLM.ai aggregator, Sep 10 2026)
- SWE-bench Pro: **51.8%** (BenchLM.ai aggregator)
- LiveCodeBench: Vals AI ranks it #40 of 143 but does not publish an exact percentage in accessible text; LiveCodeBench Pro: **74.2%** (BenchLM.ai aggregator, different benchmark variant)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **4.06%** (BenchLM.ai aggregator) — note Vals AI's own live table shows "0.0%" for this and most rows, which appears to be a client-rendering artifact on that page rather than an actual zero score
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks long-context retrieval score was found for Grok 4.20. The 2M-token window size is vendor/tracker-stated but retrieval accuracy at that length is unverified.

### Normalized scores (1-100)

- **Tool use: 48/100.** Only Terminal-Bench 2.1 is verified (44.2%), just under the mid-tier 45-60% band; no Tau3-Banking or GDPval-AA figures exist to round this out, so the score sits at the low end of mid-tier.
- **Reasoning: 62/100.** GPQA Diamond is strong and near-frontier (88.64%), but the broader Artificial Analysis Intelligence Index is mediocre on current methodology (25-26/100, ranked roughly #104-106 of ~211-216 models), and HLE/CritPt are unverified — a narrow strength that doesn't generalize on the evidence available.
- **Context window: 96/100.** Verified 2M-token window clears the >=1M tier, but no verified retrieval benchmark (MRCR/RULER) at 512K+ exists to justify the full 100.
- **Multimodal: 65/100.** Text + image input, text-only output; no audio input or non-text output found.
- **Coding: 74/100.** SWE-bench Verified in the 74-77% range (two independent sources) is solid but below the DeepSWE/Terminal-Bench/SciCode frontier thresholds, which are themselves unverified for this model.
- **Cost efficiency: 80/100.** Based on Artificial Analysis's benchmarked $2.00/$6.00 per-1M pricing for the base "0309" release. (The "v2" pricing of $1.25/$2.50 would score closer to ~90; a conflicting $20/$60 figure from one news report could not be verified and was excluded from scoring.)
- **Overall Score: 69.0/100.** (48 + 62 + 96 + 65 + 74) / 5 = 69.0. Best-fit use case: long-document or large-codebase agentic tool use at moderate cost, where a huge context window matters more than frontier-level composite reasoning; a weaker fit for teams prioritizing top-tier broad reasoning or agentic benchmarks, given the mediocre current Intelligence Index and the missing Tau3-Banking/GDPval-AA/HLE data.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-25
- Method: Public web research (search + page fetches) against Artificial Analysis, Vals AI, and BenchLM.ai model/benchmark pages as of 2026-09-25; scores are normalized 1-100 interpretations, not official vendor scores. Data-quality caveats surfaced during research: (1) at least two distinct "Grok 4.20" listings exist (base "0309" and "0309 v2") with different pricing and Intelligence Index scores, both reported separately above; (2) Vals AI and Artificial Analysis both list this model's developer as "SpaceXAI" rather than "xAI," reproduced here as found rather than corrected; (3) one news report's pricing ($20/$60) conflicts with Artificial Analysis's own benchmarked pricing ($2.00/$6.00) and was flagged as unverified rather than used.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
