# GPT 5.3 Codex — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.3-codex`, API model `gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's agentic coding model released 2026-02-05, unifying the frontier coding performance of GPT-5.2-Codex with GPT-5.2's professional reasoning into one system, running 25% faster in Codex. Built for long-horizon, tool-using engineering work that must hold context and adapt plans over many steps; GPT-5.3-Codex-Spark is a distinct ChatGPT Pro research preview and not this entry.
- **Provider / access:** OpenAI API `gpt-5.3-codex` (reasoning effort low/medium/high/xhigh); Codex surfaces (app, CLI, IDE extension, web) on paid ChatGPT plans; GitHub Copilot from 2026-02-09; OpenRouter and Vercel AI Gateway; OpenCode Zen `opencode/gpt-5.3-codex`. Codex-oriented prompting guide published by OpenAI.
- **Release / knowledge:** released 2026-02-05; knowledge cutoff 2025-08-31.
- **IDs:** `opencode/gpt-5.3-codex` (Zen, standard pricing); upstream `gpt-5.3-codex`.
- **Context window:** 400,000 tokens, 128,000 max output (OpenAI API model page).
- **Modalities:** text input/output; reasoning effort low–xhigh; tool calls and shell/file editing in the Codex harness; computer use verified indirectly by OSWorld-Verified; no documented image/audio/video input modality.
- **Pricing (as of 2026-10-02):** $1.75 in / $14.00 out per 1M; cached input $0.175. Also bundled inside paid ChatGPT plans (Plus $20/mo, Pro $200/mo, Business $30/user/mo) with usage allowances; no free tier.
- **Architecture:** proprietary; weights not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI launch, xhigh — new high on that version; +13.3 over GPT-5.2-Codex)
- Terminal-Bench 2.1: **79.1%** mean task success (Terminal-Bench owner leaderboard, Codex CLI harness — Writingmate flags it as not protocol-compatible with provider-reported harnesses)
- OSWorld-Verified: **64.7%** (+26.5 over GPT-5.2-Codex)
- SWE-Lancer IC Diamond: **81.4%** (+5.4)
- τ-bench: **77.8%** (LLMReference observation, 2026-04-24)
- GDPval (wins or ties): **70.9%** (matches GPT-5.2)
- Cybersecurity CTF challenges: **77.6%** (+10.2)
- Toolathlon / MCP Atlas / GDPval-AA Elo: no verified public score found

Reasoning / knowledge:

- No GPQA Diamond, HLE or FrontierMath row published for the Codex tier: OpenAI's launch evaluates only SWE-Bench Pro, Terminal-Bench 2.0, OSWorld-Verified and GDPval
- Nearest proxies: Cybersecurity CTF 77.6% and the GPT-5.2 professional-reasoning capability the model inherits (GPT-5.2 GPQA Diamond 92.4%, HLE 34.5% no-tools)
- Critique note: no verified public academic-reasoning score found for this exact model ID

Coding:

- SWE-bench Pro (public, pass@1): **56.8%** at xhigh (OpenAI; rank 22/46 on LLMReference; GPT-5.2-Codex 56.4%)
- SWE-bench Verified: **85.0%** (LLMReference observation 2026-04-24, rank 7/81); S5 Labs lists **80.0%** from the launch appendix
- SWE-rebench: **58.2%** pass@1, best of 5 runs (2026-05-28)
- Terminal-Bench 2.0: **77.3%**; token efficiency: achieves its scores with fewer output tokens than any prior model

Long context:

- 400,000-token window with a 128,000-token output ceiling is verified on the model page
- No MRCR / RULER / GraphWalks / AA-LCR row published for the Codex tier — Codex carries long-horizon state via session context, not a measured retrieval benchmark
- Long-context (200K) is what Alibaba's harness convention and SWE-Bench Pro protocols assume for comparable runs

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 77.3% and the owner-run 2.1 figure of 79.1%, plus τ-bench 77.8%, SWE-Lancer IC Diamond 81.4% and OSWorld-Verified 64.7%, make it one of the strongest tool-driving models measured here; capped by the absence of any Tau3, Toolathon or MCP-Atlas row.
- **Reasoning: 70/100.** The model explicitly inherits GPT-5.2's professional reasoning and its Cybersecurity CTF score of 77.6% is the only directly measured reasoning-adjacent figure; the score is capped because OpenAI published no GPQA, HLE or FrontierMath number for this ID, so no academic-reasoning evidence exists.
- **Context window: 76/100.** A verified 400,000-token window with a 128,000-token output ceiling, and the model is explicitly optimized for long-horizon sessions; no published long-context retrieval benchmark means the effective ceiling cannot be measured rather than assumed high.
- **Multimodal: 30/100.** Officially text-in/text-out with no documented image, audio or video input, so it sits above the pure text-only floor only because OSWorld-Verified 64.7% evidences screenshot-level desktop perception inside the Codex harness.
- **Coding: 86/100.** SWE-bench Pro 56.8% at xhigh (state of the art on the four-language contamination-resistant benchmark at launch), SWE-bench Verified 85.0%, Terminal-Bench 2.0 77.3% and SWE-rebench 58.2%, delivered with the fewest output tokens of any prior model — a rare combination of strength and token thrift.
- **Cost efficiency: 70/100.** $1.75/$14 per 1M with a 90% cached-input discount ($0.175) and inclusion in paid ChatGPT plans; no free tier, and Codex carries the highest-cyber-capability classification obligations of the OpenAI line.
- **Overall Score: 69.2/100.** Half-up mean of the five quality dims. Best fit as a dedicated long-horizon coding/terminal agent inside Codex or an OpenAI-compatible harness — a specialist, with the low Multimodal and unmeasured Reasoning reflecting that specialization rather than any weakness on its target workload.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.3-Codex launch page and API model docs, MarkTechPost, Digital Applied, Writingmate, S5 Labs, LLMReference, eesel AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex_Spark.md`, using the same headings.

---