# Grok 4.7 — findings by Claude Sonnet 4.5

- Source: xAI (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (no free consumer tier confirmed at API level; available to SuperGrok/Premium+ subscribers in the Grok app)
- **Short description:** xAI's frontier model for coding, agentic workloads, and professional knowledge work, with a 500,000-token context window and longer reinforcement-learning training. It uses a new, larger base model compared to Grok 4.6 and was trained with a longer reinforcement learning run on a harder mix of tasks, weighted toward problems that take many hours to complete.
- **Provider / access:** Available on the xAI API as `grok-4.7`; 500k context window, text and image inputs with text-only output, no text output limit. Also callable through Cursor, Grok Build, OpenRouter, Vercel, and Cloudflare. Supports both Chat Completions and Responses API. On the Responses API, `grok-4.7` always returns `reasoning.encrypted_content`, even when not listed in `include`.
- **Release / knowledge:** Released on September 21, 2026 by xAI. Knowledge cutoff: May 2026 (per xAI docs).
- **IDs:** `xai/grok-4.7` (official xAI API); `x-ai/grok-4.7` on OpenRouter. Grok 4.7 Fast (same model at twice the token rates) is available only through Cursor and Grok Build, not on the public xAI API. No free-tier API ID confirmed on OpenCode Zen at time of research.
- **Context window:** 500k context window, text and image inputs, text-only output, no output limit. For prompts above 200,000 tokens, a higher pricing tier applies. No independent MRCR/RULER retrieval score reported — verified via official xAI release notes.
- **Modalities:** Text + image input; text-only output. Supports four reasoning levels, function calling, web search, X search, and code execution. Reasoning: yes (encrypted reasoning on Responses API). No audio in, no video in, no image/audio output.
- **Pricing (as of 2026-09-25):** $2 / $0.50 / $6 per 1M tokens (input / cached input / output) for prompts below 200k tokens; $4 / $1 / $12 per 1M tokens above 200k. Paid API; no free-tier privacy caveat publicly documented.
- **Architecture:** Approximately 2.1 trillion total parameters per Musk's public statements, with supplemental training on SpaceX company data. xAI has not published an architecture document confirming active parameters or routing details (MoE structure unverified). Proprietary closed weights, not open-sourced.

---

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 4.0 (note: _not_ TB 2.1; different version): **38.0%** (xAI vendor-reported, Grok Build harness, xhigh effort)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1,695 Elo** (Artificial Analysis; +90 ahead of Grok 4.6 high)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- SWE-Atlas Codebase QnA: **63%** (Artificial Analysis, up from 58% on Grok 4.6)
- Harvey Legal Agent Benchmark: **19.6%** (vendor-reported, up from 15.8% on Grok 4.6)
- AA-Briefcase v1.1: **1,657 Elo** (Artificial Analysis; +111 Elo over Grok 4.6 high; just behind Claude Opus 5 and Claude Fable 5.1)

**Reasoning / knowledge:**

- GPQA Diamond: **no verified public score found** (scores cited in pre-release speculation are unverified and marked "not official" by their source)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46** (Artificial Analysis Intelligence Index, using 81k output tokens per task at xhigh effort) / BenchLM: 7 sourced rows tracked but no public overall rank assigned yet
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- EEBench (electrical engineering): **64.0%** (vendor-reported, xAI; vs 53.0% for Grok 4.6)
- HealthBench Professional (clinical): **56.7%** (vendor-reported)

**Coding:**

- SWE-bench Verified / SWE-Pro: **no verified public score found** (xAI used DeepSWE v1.1 as primary coding eval, not SWE-bench Verified)
- DeepSWE v1.1: **73%** (Artificial Analysis; up from 65% on Grok 4.6, at high effort)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- CursorBench 4.0: **46.3%** (vendor-reported, up from 40.4% for Grok 4.6)
- SWE-Marathon v1.1: **46.0%** at high effort (up from 31.9%)
- AA Coding Agent Index: **56** (Artificial Analysis; up from 47 with Grok 4.6, using Grok Build harness at xhigh)

**Long context:**

- The 500k context window is an input capacity, not a guarantee that every detail will be recovered correctly — no MRCR, RULER, or GraphWalks retrieval score reported.

---

### Normalized scores (1-100)

- **Tool use: 72/100.** GDPval-AA of 1,695 Elo and AA-Briefcase of 1,657 Elo place it at or near frontier for agentic knowledge work (second tier, just behind Claude Fable 5.1 / Opus 5). Terminal-Bench 4.0 at 38% is solid mid-tier (note: TB 4.0 ≠ TB 2.1 used in methodology; no direct TB 2.1 score available). Among models in native harnesses, Grok 4.7 + Grok Build ranks 4th on the AA Coding Agent Index. GDPval-AA of 1,695 is frontier (>1,750 = 90-100 tier; 1,695 falls just short). Caps at 72 due to absence of Tau3-Banking and TB 2.1 scores, and 4th-place (not top-tier) ranking overall.

- **Reasoning: 62/100.** Independent AA Intelligence Index score of 46, below Fable 5.1 and GPT-6 Astra at 53. No verified GPQA Diamond, HLE, LCR, or CritPt scores published for Grok 4.7 specifically. Outside of agentic knowledge work, Grok 4.7 broadly matches Grok 4.6 on other Intelligence Index tasks. AA Index of 46 (scale where frontier leaders score 53+) maps to mid-tier reasoning; no GPQA/HLE anchors to push higher. Score caps at 62.

- **Context window: 85/100.** 500k context window (text and image inputs, no output limit) — falls in the 500K–1M tier (methodology: 85–94). No retrieval benchmark (MRCR/RULER) at 512K+ reported, so cannot award above 85. Score: **85**.

- **Multimodal: 65/100.** Accepts text and image input; outputs text only. No audio input, no video input, no PDF-native input confirmed, no non-text output. Per methodology, "+image in = 60–70". Score: **65**.

- **Coding: 74/100.** DeepSWE v1.1 at 73% (up from 65% on Grok 4.6) approaches but does not clearly exceed the 74%+ frontier threshold. AA Coding Agent Index of 56 (out of 100). Trails Claude Fable 5.1 on coding overall. DeepSWE at 73% is one point below the 74%+ top-tier floor; SWE-bench Verified and LiveCodeBench are absent. Score caps at 74.

- **Cost efficiency: 87/100.** $2/M input and $6/M output (below 200k tokens); $4/M input and $12/M output above 200k. At standard tier ($2/$6), this maps between the ~$1.25/$4.25 (~88) and $3/$15 (~60) tiers — scoring approximately **87** at the below-200k rate. Note: the model is slow and verbose, so real task cost runs higher than per-token rates suggest. Scored independently; not counted in Overall.

- **Overall Score: 72/100.** Mean of (Tool use 72 + Reasoning 62 + Context window 85 + Multimodal 65 + Coding 74) / 5 = 358 / 5 = **71.6 → 72**. Grok 4.7 is a strong, cost-efficient model that sits just behind the top frontier tier, priced at $2/$6 per million tokens — the same as Grok 4.6. Best-fit recommendation: cost-conscious engineering, legal reasoning, and long-horizon agentic workflows where near-frontier quality at below-frontier pricing is the priority; not the top choice where raw coding leaderboard position is paramount.

---

## Signature

- Provided by: **Claude 4.5 (Sonnet) (anthropic/claude-sonnet-4-5)** — 2026-09-25
- Method: Fresh public internet research via web search (xAI official release notes/docs, Artificial Analysis benchmarking article, Decrypt, MarkTechPost, emergent.sh, officechai, llm-stats.com, cellcog.ai, benchlm.ai); scores are normalized 1-100 interpretations per the v4 methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
