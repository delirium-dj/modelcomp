# Space Bunny Alpha — findings by Kimi K3

- Source: Anonymous (stealth) / Space Bunny Alpha (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny-free` on OpenCode Zen)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** Anonymous stealth-preview reasoning model listed on OpenRouter/OpenCode on 2026-09-23 — fast inference, coding/agentic focus, native multimodal input, five mandatory reasoning efforts (provider default max), 1M context. **Identity resolved (late Sept 2026): MiniMax's M3.1-Flash-Preview.** Tokenizer probes (24/24 matches to the MiniMax family), Chinese-language self-identification, and a full trait match with the model MiniMax launched inside MiniMax Code on 2026-09-27 (same 1M window, no model card, no published price) all point there; multiple outlets (cellcog, startupfortune, toolbit, agihunt) report MiniMax confirmed the link. The earlier OpenAI-Harmony reconstructed-prompt hypothesis is superseded. Cross-reference: `../minimax-m3.1-flash-preview/`.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (Chat Completions); OpenCode Zen `space-bunny-free` (limited-time free, zero data retention per Zen docs; provider does not train on data).
- **Release / knowledge:** listed 2026-09-23 (OpenRouter); knowledge cutoff undisclosed.
- **IDs:** `opencode/space-bunny-free` (Zen Free tier, active); `stealth/space-bunny-alpha` (OpenRouter).
- **Context window:** 1,000,000 tokens total / 524,288 max completion (OpenRouter catalog; reasoning counts toward completion budget).
- **Modalities:** text/image/video in; text out; mandatory reasoning (low/medium/high/xhigh/max, provider default max); tool calls; JSON response format (no schema enforcement).
- **Pricing (as of 2026-09-29):** $0/$0 per 1M on both OpenRouter and OpenCode Zen — free preview, time-limited. The identity-resolved sibling (M3.1-Flash-Preview) still has no published per-token price (MiniMax Code subscription surface).
- **Architecture:** undisclosed (anonymous). Speed: OpenRouter P50 87 tok/s, P50 latency 1.07s, 3-day inference availability 94.98% (OpenRouter dashboard snapshot 2026-09-24).

### Raw benchmarks found

Agent / tool use:

- AI BENCHY (private 22-test suite, published run 2026-09-24, `stealth/space-bunny-alpha::high`): **7.0/10 overall**, 12/22 tests fully passed, 62.1% attempt pass rate — **Tool Calling 10/10**, **Data parsing/extraction 10/10**, API reliability 10/10; weak Trivia 3.0/10, General Intelligence 4.2/10
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- HLE (original, 300-question subset, independent run): **46.1%** (95% CI 40.4–51.8) — reference results on the same page: GPT-5.6 Sol 49.5%, GPT-5.5 45.8%, MiniMax M3 39.0%
- GPQA Diamond (60-question subset, same evaluator): **82.0%**
- MMLU-Pro (same evaluator): **75%**
- Token efficiency: **67% fewer output tokens than Qwen3.8 Flash** on the same benchmark set (306K vs 914K output tokens)

Coding:

- AI BENCHY Coding category: **6.2/10**; SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- Independent stealthprint OpenCode Go test: **3/3 hidden codes recovered in order in one 200K-token run** (200,187 prompt tokens)
- MRCR / RULER: **no verified public score found**

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded. Note: all capability numbers above come from small subset/private-suite runs (not audited leaderboards) — scores are provisional.

- **Tool use: 72/100.** Perfect 10/10 tool-calling and extraction categories in the published AI BENCHY run plus cataloged function-calling support; capped by the private suite and missing TB2.1/Tau3/GDPval coverage.
- **Reasoning: 82/100.** HLE 46.1% approaches the leading reference scores (frontier band starts at 40%+), GPQA 82% is mid-high; held below 90 because both come from unaudited subset evaluations.
- **Context window: 95/100.** Verified 1M window (95–100 band) with a positive independent 200K retrieval check; no 512K+/98% retrieval evidence for 100.
- **Multimodal: 80/100.** Text/image/video input verified by the OpenRouter catalog (75–90 band); text-only output, no audio → mid-band.
- **Coding: 58/100.** Only coding-adjacent number is AI BENCHY Coding 6.2/10; no SWE-bench/LiveCodeBench row exists. Scored low-mid rather than invented.
- **Cost efficiency: 100/100.** $0/$0 during the free preview on both gateways; zero-retention on Zen. Time-limited — re-score when paid pricing lands.
- **Overall Score: 77.4/100.** Mean of (72 + 82 + 95 + 80 + 58)/5 = 77.4. Best fit: free long-horizon agentic/research assistant with excellent tool discipline and 1M context, while the preview lasts; reasoning is strong, verified coding depth is thin.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (spacebunnyalpha.com independent field guide with published AI BENCHY run and subset evals; OpenRouter catalog snapshot; OpenCode Zen docs; stealthprint long-context probe). Reverified 2026-09-29: identity now resolved to MiniMax M3.1-Flash-Preview (tokenizer match + self-identification + the 2026-09-27 MiniMax Code launch with an identical public profile, per cellcog/startupfortune/toolbit/agihunt); capability numbers unchanged — no new benchmark runs since 2026-09-25. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
