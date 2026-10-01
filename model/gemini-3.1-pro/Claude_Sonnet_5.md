# Gemini 3.1 Pro — findings by Claude Sonnet 5

- Source: Google DeepMind/Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview (still in preview as of this writing; three months after launch it had no confirmed GA date)
- **Short description:** Gemini 3.1 Pro is described by Google as the next iteration in the Gemini 3 series, a suite of natively multimodal reasoning models, and Google's most advanced model for complex tasks as of its model card's publication. Best-fit use case: long-context reasoning, agentic tool use, and coding.
- **Provider / access:** Available through the Gemini API, Google AI Studio, Vertex AI, Gemini CLI, Android Studio, and the Gemini app for Pro and Ultra subscribers. No OpenCode Zen Free-tier ID found. Uses Google's native Gemini API (not OpenAI-style Chat Completions).
- **Release / knowledge:** Released February 19, 2026. Knowledge cutoff not consistently confirmed across sources (one secondary aggregator listed Jan 2025, but this is unverified against Google's own card).
- **IDs:** `google/gemini-3.1-pro-preview`
- **Context window:** 1M tokens documented context window, 1,048,576 tokens with a maximum output of 66K tokens per response (some sources list max output as 64K — minor discrepancy across aggregators). No MRCR/RULER long-context retrieval score found.
- **Modalities:** Input modalities: text, image, video, audio, pdf; output modality: text. Reasoning: yes (three-tier thinking system per one aggregator). Tool calls: yes (agentic/MCP benchmarks below). JSON mode: not confirmed.
- **Pricing (as of 2026-10-01):** $2.00/1M input and $12.00/1M output for context ≤200K; $4.00/1M input and $18.00/1M output for context >200K. Cached input priced at $0.20/1M. Not free-tier; limited free access exists via Google AI Studio with rate limits per secondary sources.
- **Architecture:** Proprietary; no params/MoE disclosure found in public sources.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (only **Terminal-Bench 2.0: 68.5%**, per Google's own benchmark listing — note this is v2.0, not the v2.1 harness specified in methodology)
- Tau3-Banking: no verified public score found (only **τ²-bench Retail: 90.8%** and **τ²-bench Telecom: 99.3%**, per Google's listing — different harness version/domain than specified)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas: **69.2%** per the official Model Card; BrowseComp: **85.9%** (same source)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** verified score reported at launch, the highest recorded on that benchmark at the time (one aggregator lists 94.1%/94.30 — minor cross-source variance)
- HLE (Humanity's Last Exam): **44.4%** per aggregator FAQ summarizing launch benchmarks
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **57**, #1 on Artificial Analysis's Intelligence Index, ahead of Claude Opus 4.6 (53) and GPT-5.2 (51), leading on 12 of 18 tracked benchmarks
- Omniscience Accuracy / Hallucination Rate: hallucination rate reduced 38 percentage points vs. Gemini 3 Pro Preview, dropping from 88% to 50%, on Artificial Analysis's AA-Omniscience benchmark

Coding:

- SWE-bench Verified: **80.6%** single-attempt figure from Google DeepMind's own model card, putting it level with Claude Opus 4.6's 80.8%
- SWE-bench Pro: **54.2%** per launch benchmark summary
- LiveCodeBench Pro Elo: **2887** (one source), conflicting with **2439** Elo on another secondary aggregator — treat as unresolved cross-source conflict; one source states the LiveCodeBench Pro Elo of 2887 is a serious number
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported for this model.

### Normalized scores (1-100)

- **Tool use: 78/100.** Terminal-Bench 2.0 (not the specified 2.1 harness) at 68.5% sits well above the 45–60% mid-tier band but below the 88%+ frontier bar; τ²-bench Telecom/Retail scores (99.3%/90.8%) are very strong but on a different harness than the specified Tau3-Banking. GDPval-AA unavailable, capping confidence.
- **Reasoning: 93/100.** GPQA Diamond 94.3% and HLE 44.4% both clear the frontier thresholds (90%+ / 40%+); AA Intelligence Index of 57 is just under the 60+ frontier reference but still ranked #1 among tracked peers.
- **Context window: 95/100.** Verified 1,048,576-token (≈1M) context window clears the ≥1M tier, but no MRCR/RULER retrieval verification was found, so held below the 100 ceiling reserved for proven ≥98% retrieval at 512K+.
- **Multimodal: 92/100.** Input spans text, image, video, audio, and PDF (qualifying for the 90–100 "+audio in" band); output is text-only, which caps it below 100.
- **Coding: 85/100.** SWE-bench Verified 80.6% is close to but below the DeepSWE 74%+/TB2.1 85%+ frontier bar as strictly defined; strong LiveCodeBench Pro Elo ranking but with an unresolved numeric conflict across sources.
- **Cost efficiency: 75/100.** $2/$12 per 1M tokens (≤200K context) sits between the $1.25/$4.25 (~88) and $3/$15 (~60) reference points on the cost scale; rises to $4/$18 above 200K context, which pulls effective efficiency down further on long-context workloads.
- **Overall Score: 88.6/100.** Mean of (78 + 93 + 95 + 92 + 85) / 5. Best fit: large-context agentic coding and research workflows where reasoning depth and a 1M-token window matter more than rock-bottom cost.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-10-01
- Method: public web research via live search across vendor blog posts, Google's own model-card mirrors, and third-party benchmark aggregators (LayerLens, BenchLM, Towards AI newsletter, TechCrunch, and others); scores are normalized 1-100 interpretations, not official vendor scores. Note: several raw figures (e.g., LiveCodeBench Pro Elo, Terminal-Bench version, GPQA to the decimal) showed minor cross-source discrepancies; the most frequently corroborated and most official-looking figures were used, with conflicts flagged inline.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
