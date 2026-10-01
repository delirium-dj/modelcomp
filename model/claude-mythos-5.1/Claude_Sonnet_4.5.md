# Claude Mythos 5.1 — findings by Claude (anthropic/claude-sonnet-4-5)

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

---

## Model card

- **Name:** Claude Mythos 5.1 (Invite-only / Trusted-Access tier; no free tier exists)
- **Short description:** Claude Mythos 5.1 is one of two configurations of Anthropic's latest and most capable large language model, advancing the frontier in coding, knowledge work, and problem-solving with improved capabilities for novel mathematical and scientific reasoning. It is Anthropic's most capable model for cybersecurity defense and life sciences research, including threat intelligence, vulnerability discovery, red teaming, drug discovery, and biodefense screening. Flag: Mythos 5.1 and Fable 5.1 are the same underlying model with different safeguard levels; Fable 5.1 is the generally-available twin.
- **Provider / access:** Claude Mythos 5.1 is restricted to vetted US organizations inside Project Glasswing; available on the Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry — but only for approved organizations. Uses Chat Completions / Messages API (Anthropic standard). For access, contact your Anthropic, AWS, or Google Cloud account team.
- **Release / knowledge:** Released September 1, 2026, with model ID `claude-mythos-5-1`. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-mythos-5-1` — No free tier ID exists on OpenCode Zen or any public playground; access is strictly invite-only through Project Glasswing.
- **Context window:** 1M token context window; 128K max output tokens. Verified via Anthropic platform docs and AWS Bedrock model card.
- **Modalities:** Input: text and images; output: text. Adaptive thinking always on; default effort: high. Tool calls: yes (agentic use cases confirmed). JSON mode: consistent with Anthropic API standard. No audio/video input or non-text output reported. Reasoning: yes (adaptive, always on).
- **Pricing (as of 2026-10-01):** Input: $10/MTok; Output: $50/MTok; 5-minute cache write: $12.50/MTok; 1-hour cache write: $20/MTok. Cache reads: $0.25/MTok (reduced 75% from prior $1.00). Paid only — no free tier. Trusted-access users should consult their program agreement for data-handling terms.
- **Architecture:** Claude Fable 5.1 is available for general use with safeguards that prevent certain dual-use domain tasks; Claude Mythos 5.1 is the same model with more permissive safeguards in those domains. Proprietary; parameter count and MoE/dense architecture not publicly disclosed. Not open-weights.

---

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: no verified public score found for this harness version specifically. See Terminal-Bench 4.0 below.
- Terminal-Bench 4.0: **60.9%** — Mythos 5.1 reaches 60.9% on Terminal-Bench 4.0 under its more permissive cyber safeguards, vs. 55.8% for Fable 5.1 and 42.0% for Fable 5. (Source: Anthropic launch materials via VentureBeat, 2026-09-01)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2: **1,853** — Anthropic reports a GDPval-AA v2 score of 1,853 for knowledge work, vs. 1,824 for Opus 5 and 1,723 for Fable 5. (Source: VentureBeat, 2026-09-01)
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld: **79.6%** — reported for Claude Mythos Preview under the combined benchmark table (Hacker News / Anthropic system card, April 2026). Note: this score is for Mythos Preview, not specifically Mythos 5.1; Mythos 5.1-specific OSWorld score: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **94.5%** — reported for Claude Mythos Preview (Anthropic system card / Hacker News combined results, April 2026). Mythos 5.1-specific score: no verified public score found separately, but Mythos 5.1 shares the same underlying model as Fable 5.1.
- HLE (no tools): **56.8%** — reported for Claude Mythos Preview. Mythos 5.1-specific score: no verified public score found separately.
- HLE (with tools): **64.7%** — reported for Claude Mythos Preview.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for Mythos 5.1 specifically (model is restricted-access and not on public leaderboards)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

**Coding:**

- SWE-bench Verified: **93.9%** — reported for Claude Mythos Preview (April 2026 leaderboard; Mythos Preview leads at 93.9%). Mythos 5.1-specific score: no verified public score found separately; score is widely attributed to the Mythos Preview configuration.
- SWE-bench Pro: **77.8%** — reported for Claude Mythos Preview.
- SWE-bench Multilingual: **87.3%** — reported for Claude Mythos Preview.
- SWE-bench Multimodal: **59.0%** — reported for Claude Mythos Preview.
- Terminal-Bench-Science 0.1: **52.6%** — reported for the Fable 5.1 / Mythos 5.1 shared model. (Source: MarkTechPost, 2026-09-01)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: Mythos 5.1 designed protein binders against 12 targets using open-source tools; hit rate nearly 50% against a 10–15% norm in protein design. (Source: Vellum, 2026-09-01) — this is a real-world lab evaluation, not a formal SciCode benchmark score. Formal SciCode/AA-SciCode score: no verified public score found.
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

**Long context:**

- GraphWalks BFS 256K–1M: **80.0%** — reported for Claude Mythos Preview (Hacker News / Anthropic system card, April 2026). Mythos 5.1-specific retrieval score: no verified public score found separately.
- MRCR / RULER: no verified public score found for Mythos 5.1 specifically

---

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 4.0 at 60.9% is strong but below the TB 2.1 88%+ frontier threshold; GDPval-AA v2 at 1,853 clears the frontier ≥1,750 tier. OSWorld 79.6% (Mythos Preview) is well into frontier territory. No Tau3-Banking or Claw-Eval data. Score capped by TB4.0 being a newer, harder harness (60.9% on TB4.0 is roughly equivalent to upper-mid frontier on TB2.1 scale) and missing Tau3 data.

- **Reasoning: 93/100.** GPQA Diamond 94.5% (Mythos Preview / shared model) is firmly in the top frontier band (90%+). HLE with tools at 64.7% is well above the 40%+ frontier threshold. USAMO 97.6% (Mythos Preview) further confirms elite mathematical reasoning. Score capped slightly below 100 due to some scores being attributed to Mythos Preview rather than a separately verified Mythos 5.1 run, and absence of BenchLM/AA Index independent ranking.

- **Context window: 97/100.** 1M token context window verified via Anthropic platform docs and AWS Bedrock model card. Tier: ≥1M = 95–100. Score is 97 (not 100) because GraphWalks BFS retrieval at 80.0% (256K–1M) — attributed to Mythos Preview — does not reach the 98%+ retrieval threshold required for a score of 100; no independent MRCR/RULER score at 512K+ confirmed for Mythos 5.1 specifically.

- **Multimodal: 65/100.** Input modalities are text and images; output is text only. No audio input, video input, or non-text output reported. Tier: +image in = 60–70. Scored 65 (mid-range of tier) given confirmed image input but no video/PDF/audio capability reported and no independent multimodal benchmark score (e.g., MMMU) verified for Mythos 5.1 specifically.

- **Coding: 92/100.** Terminal-Bench 4.0 at 60.9% and Terminal-Bench-Science at 52.6% are strong agentic coding results. SWE-bench Verified 93.9% (Mythos Preview / shared model) is frontier-leading. SWE-bench Pro 77.8% exceeds the DeepSWE 74%+ threshold. Score is 92 rather than 95+ because the 93.9% SWE-bench Verified and 77.8% SWE-bench Pro figures are formally attributed to Mythos Preview; no independent LiveCodeBench or SciCode formal score verified for Mythos 5.1.

- **Cost efficiency: 30/100.** Priced at $10/MTok input and $50/MTok output. At the $10/$50 price point, the methodology maps this to approximately 30/100. This score is independent and not counted in the Overall.

- **Overall Score: 86/100.** Mean of Tool use (82) + Reasoning (93) + Context window (97) + Multimodal (65) + Coding (92) = 429 / 5 = **85.8 → 86**. Best-fit recommendation: Claude Mythos 5.1 is the premier choice for vetted cybersecurity researchers and life-sciences organizations requiring frontier-class autonomous coding, mathematical reasoning, and long-context retrieval at 1M tokens — but its invite-only access, $10/$50 per MTok pricing, and restricted US-only availability make it unsuitable for general enterprise or consumer use; Claude Fable 5.1 (the identical model with standard safeguards) is the practical alternative for most buyers.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4-5)** — 2026-10-01
- Method: Fresh public internet research (web search across Anthropic platform docs, AWS Bedrock model card, official system card PDF, Wikipedia, VentureBeat, MarkTechPost, Vellum, eesel.ai, Hacker News, layer3labs.io, 9to5Mac, nxcode.io, mindstudio.ai, morphllm.com, codeant.ai); scores are normalized 1–100 interpretations using the v4 methodology defined in `../../model-comparison.md`, not official vendor scores. Benchmark figures marked "Mythos Preview" in sources are attributed to the same underlying model architecture but may reflect an earlier configuration; provenance is noted in each raw benchmark line.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
