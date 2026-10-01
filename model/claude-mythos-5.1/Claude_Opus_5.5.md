EXCLUDED — not applicable (one verified Mythos-specific benchmark found; scored dims below, mostly derived from the twin model)

# Claude Mythos 5.1 — findings by Claude Opus 5.5

- Source: Anthropic/Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (paid, restricted access; there is no Free tier)
- **Short description:** Anthropic's restricted model for cyberdefense and life-sciences work: threat intelligence, finding vulnerabilities, red teaming, drug discovery and biodefense screening (AWS Bedrock model card). It uses the same weights as the generally available Claude Fable 5.1. The only difference is that the cyber and bio/chem safeguards are relaxed (Anthropic launch post; VentureBeat). Variant flag: Mythos 5.1 is the trusted-access version of Fable 5.1, not a separate model.
- **Provider / access:** Anthropic trusted-access programs, for vetted organizations only (Anthropic, alphaXiv mirror of the launch post). Amazon Bedrock lists the ID `global.anthropic.claude-mythos-5-1` with InvokeModel/Converse; the AWS sample uses the Anthropic Messages format (`anthropic_version: bedrock-2023-05-31`). It does not use Chat Completions or Responses. One secondary blog (local-ai-zone) says Mythos is not on public cloud marketplaces, but the official AWS doc contradicts this. No OpenCode Zen or models.dev listing was verified.
- **Release / knowledge:** 2026-09-01 (AWS Bedrock model card; Anthropic). EOL no sooner than 2027-09-01 (AWS). Knowledge cutoff: no verified public cutoff found.
- **IDs:** `anthropic/claude-mythos-5-1` (first-party ID per local-ai-zone, a secondary source); `bedrock/global.anthropic.claude-mythos-5-1` (official AWS doc). No Free ID exists on OpenCode Zen, and no Zen ID was verified at all.
- **Context window:** 1M tokens total, 128K max output. This comes from local-ai-zone, which inherits it from the Fable 5.1 spec, and BenchLM's model page (lists "1M tokens"). I did not confirm it against Anthropic's own docs.
- **Modalities:** Input is text and image; output is text (local-ai-zone, secondary). Reasoning: yes, adaptive thinking is always on, with effort levels low/medium/high/xhigh/max. There is no temperature/top_p/top_k and no prefill. Tool calls: yes (agentic Terminal-Bench evaluations). JSON mode: not verified. PDF, audio and video input: not verified.
- **Pricing (as of 2026-10-01):** Paid. VentureBeat's table lists "Claude Fable 5.1 / Claude Mythos 5.1" at $10.00 input and $50.00 output per 1M tokens, and Vellum confirms $10/$50 is unchanged. Cached reads are $0.25/1M, but this is reported for Fable 5.1 and not confirmed for Mythos. BenchLM's caveat: "API rate not published… no comparable first-party hosted token rate". Because access is gated, the usage terms come from your trusted-access agreement.
- **Architecture:** Proprietary (Wikipedia, "Claude Mythos"). Parameter counts and MoE design are not disclosed. Anthropic's official position is that the weights are identical to Claude Fable 5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. **Terminal-Bench 4.0: 60.9%** (Anthropic launch post / system card, max effort; confirmed by Vellum, BenchLM, felloai). For comparison: Fable 5.1 55.8%, Opus 5 52.3%, GPT-5.6 Sol 37.3%. Mythos was reported #1 at launch on 2026-09-01 (buildfastwithai). BenchLM now shows the best verified row as Claude Sonnet 5.5 at 70.6%, putting Mythos 9.7 points behind. Mythos's lead over Fable varies by effort level: +1.5 low, +3.3 medium, +7.7 high, +8.4 xhigh, +5.1 max (system card via karozieminski).
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (Mythos column "not published"; the Fable 5.1 twin scores 1853 on GDPval-AA v2, per felloai / Zvi)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Mythos (Zvi reports 77.8% pass@1 on Toolathon Verified for the 5.1 release, attributed to Fable)
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found (Mythos "not published"; Fable 5.1 twin: 60.9% without tools / 65.0% with tools, per felloai)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for Mythos. BenchLM lists it as "Unranked… no public overall score". The Fable 5.1 twin scores 66 on the AA Index (Zvi).
- Omniscience Accuracy / Hallucination Rate: no verified public score found
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found for Mythos (Fable 5.1 twin: 73.4% on CursorBench 3.2.0, 52.6% on Terminal-Bench-Science 0.1). Non-standard cyber results reported for Mythos: 73% expert-CTF solve rate and 181 working Firefox exploits (local-ai-zone, secondary).
  Long context:
- No long-context retrieval reported for Mythos 5.1 (no MRCR, RULER or GraphWalks)

### Normalized scores (1-100)

- **Tool use: 91/100.** Based on the only Mythos-specific number, Terminal-Bench 4.0 at 60.9%. That led the launch-day frontier but now sits 9.7 points behind Sonnet 5.5 on BenchLM. TB4.0 is a newer, harder version than TB2.1, so the methodology thresholds don't apply directly. The score is supported by the twin's GDPval-AA v2 of 1853 (above the ~1750 frontier line). Capped because there are no Mythos-specific Tau3, GDPval or OSWorld scores.
- **Reasoning: 90/100.** Based only on the twin. Fable 5.1 shares the weights and scores HLE 60.9% without tools (frontier is 40%+) and AA Index 66 (frontier is 60+). Mythos has no reasoning benchmarks of its own, so I scored at the bottom of the frontier band.
- **Context window: 95/100.** 1M tokens puts it in the ≥1M tier. The figure comes from secondary sources and BenchLM, not Anthropic's docs, and there is no MRCR/RULER result at 512K+, so it can't reach 100.
- **Multimodal: 65/100.** Text and image input, text output (secondary source). PDF, video and audio input are not verified.
- **Coding: 90/100.** Mythos-specific: Terminal-Bench 4.0 at 60.9%. Twin: CursorBench 73.4%, Terminal-Bench-Science 52.6%. Capped because there is no SWE-bench, LiveCodeBench or SciCode score for this ID.
- **Cost efficiency: 30/100.** $10/$50 per 1M input/output (VentureBeat). That maps to ~30 under the rubric. Gated access also cuts its practical value.
- **Overall Score: 86.2/100.** (91 + 90 + 95 + 65 + 90) / 5 = 86.2. Best fit: vetted cyberdefense and life-sciences teams that need what Fable 5.1's safeguards block. Everyone else should use Claude Fable 5.1, which is the same model and generally available.

---

## Signature

- Provided by: **Claude Opus 5.5 (anthropic/claude-opus-5-5)** — 2026-10-01
- Method: Public web search on 2026-10-01. Sources: Anthropic launch post and system card, AWS Bedrock model card, BenchLM, Vellum, VentureBeat, felloai, Zvi Mowshowitz, local-ai-zone and Wikipedia. The search tool quota ran out partway through, so I never opened the Artificial Analysis, OpenCode Zen or models.dev pages for this ID. Scores labeled "twin" come from Claude Fable 5.1, which has the same weights, not from Mythos itself. The scores are my 1-100 interpretations, not official vendor scores. Possible conflict of interest: an Anthropic model is rating an Anthropic model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
