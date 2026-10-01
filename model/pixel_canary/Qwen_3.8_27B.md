# Pixel Canary — findings by Qwen 3.8 27B

- Source: undisclosed stealth provider (`stealth/pixel-canary` on Vercel AI Gateway; repo meta.json lists `opencode/pixel_canary`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth / anonymous; NOT the Android Pixel firmware "canary" builds)
- **Short description:** Anonymous stealth coding model dropped by Vercel into its AI Gateway on 2026-09-25 and offered 100% free while in stealth mode; catalog: "a specialized coding model engineered for frontend architecture, Next.js App Router migrations, and complex code refactoring." Vendor, weights and parameter count undisclosed; community tokenizer analysis points to a possible Qwen derivative (unconfirmed). Follows the stealth-preview lineage of Ox Alpha (→ GLM-5.3-Flash) and Space Bunny Alpha (→ MiniMax M3.1).
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary` via OpenAI/Anthropic-compatible SDK endpoints (api.vercel.com); also free in Cline and Command Code while in preview. Not found in OpenCode Zen docs or the live Zen model list despite repo meta.json listing `opencode/pixel_canary` (host/ID unverified on Zen).
- **Release / knowledge:** listed 2026-09-25 (models.dev toml + Vercel gateway update); knowledge cutoff not disclosed.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway, verified); `opencode/pixel_canary` (repo meta.json only, unverified). No native vendor ID, no open weights.
- **Context window:** 262,144 tokens total (256K linear context) with 131,072 (128K) max single-response output (models.dev toml + Vercel AI Gateway spec card; repo meta.json's "128K total" is contradicted by both fetched sources)
- **Modalities:** Text in; image in per models.dev `attachment = true` (not confirmed on the Vercel page); text out. Reasoning: yes — adjustable effort (low/medium/high; models.dev also lists none/xhigh variants). Tool calls: `tool_call = false` per models.dev (repo-context agentic harnesses still work). Open weights: false.
- **Pricing (as of 2026-09-30):** $0 input / $0 output — 100% free stealth preview (models.dev + Vercel catalog); no public paid price yet. Caveat: Vercel docs state prompts and outputs may be retained for training and model improvement; stealth precedents (Ox Alpha, Space Bunny Alpha) ran free 1–2 weeks before unmasking + standard pricing.
- **Architecture:** Undisclosed (stealth). No parameter count, license, or weights. Measured behavior: TTFT ~410ms, sustained ~95.4 t/s (community probe reports, 2026-09-26); asymmetric 256K-in/128K-out ceiling suggests sparse attention + speculative decoding (community inference, unverified).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Vercel Next.js Engineering Evaluation (31 production tasks: App Router migration, RSC, streaming SSR, hydration, font/image bundling) — agent-style end-to-end harness:
  - Zero-shot (no repo docs): **90.3% (28/31 passed)** — ties GPT-6 Astra; ahead of Claude Opus 5.5 (89.7%) and Sonnet 4.5 (87.1%) (Vercel benchmark, community re-runs within 12h of the 2026-09-25 drop; corroborated by vibeleaderboard.ai intel + techandbusiness wire: "28 of 31 tasks, matching GPT-6 Astra")
  - With AGENTS.md repository context: **96.8% (30/31 passed)** — single failure on a WebAssembly dynamic-linking edge case

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (AA + BenchLM have no page for this model as of 2026-10-01)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Vercel Next.js Engineering Evaluation: **90.3% zero-shot / 96.8% with AGENTS.md** (only public benchmark found; host-run suite, single-domain)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE / Vibe Code Bench / Coding Index / other: no verified public score found

Long context:

- 262,144-token window (above); no MRCR/RULER/GraphWalks retrieval measurement found

### Normalized scores (1–100)

- **Tool use: 60/100.** No Terminal-Bench/Tau/GDPval numbers exist; the 31-task production harness shows solid end-to-end task execution, but models.dev lists `tool_call = false` and no general tool-use benchmark is published — provisional, capped by absence of measured tool-call evidence.
- **Reasoning: 62/100.** Documented low/medium/high reasoning effort with strong results on the hardest Next.js tasks (streaming SSR, RSC boundaries, cache invalidation), but zero GPQA/HLE/AA-Index data — provisional, capped by complete absence of independent reasoning measurements.
- **Context window: 70/100.** 262,144-token verified window lands at the top of the 200K–500K band (200K = 70); 128K max output is a strength, but no long-context retrieval measurement is published, so no higher credit.
- **Multimodal: 60/100.** Text in + image in (models.dev `attachment = true`, unconfirmed on the Vercel page), text out — floor of the 60–70 "+image in" band; no vision eval found.
- **Coding: 84/100.** 90.3% zero-shot / 96.8% with repo context on Vercel's 31 production Next.js tasks ties the GPT-6 Astra flagship on that harness — genuine frontier-level evidence in one domain; discounted from the top band because it is a single host-run, Next.js-only suite with no SWE-bench/DeepSWE/TB2.1 cross-check.
- **Cost efficiency: 100/100.** $0 on the evaluated free stealth tier (time-limited, ~1–2 weeks per stealth precedent; prompts/outputs may be retained for training — do not send confidential code).
- **Overall Score: 67.2/100.** Mean of (60 + 62 + 70 + 60 + 84)/5 = 67.2. Best fit: a free, high-performing Next.js/frontend engineering agent while the stealth window lasts — ideal for App Router migrations and refactors on throwaway/non-sensitive projects; re-run your own evals if the model is unmasked and priced.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Vercel AI Gateway model page + changelog, models.dev stealth/pixel-canary toml, margrop deep-dive 2026-09-26 incl. Vercel Next.js benchmark scorecard, vibeleaderboard.ai intel, startupfortune/techandbusiness coverage, Hugging Face community blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
