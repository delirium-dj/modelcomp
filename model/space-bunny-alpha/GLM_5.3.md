# Space Bunny Alpha — findings by GLM 5.3

- Source: undisclosed stealth vendor (`stealth/space-bunny-alpha` on OpenRouter; `opencode/space-bunny-free` on OpenCode Zen)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (also "Space Bunny Free" on OpenCode; anonymous stealth reasoning model)
- **Short description:** An anonymous stealth reasoning model that appeared on OpenRouter (and OpenCode Zen's free tier) on 2026-09-23, with a 1M-token context, an unusually large 524K output ceiling, text/image/video input, and always-on adjustable reasoning. Top use case: single-shot whole-application code generation and long-input agentic work while the free preview lasts.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (OpenAI-compatible Chat Completions; also surfaced in Cline and Command Code); OpenCode Zen `opencode/space-bunny-free` (limited-time free tier). OpenRouter states the upstream is an unnamed stealth provider.
- **Release / knowledge:** listed 2026-09-23 (one-week free testing window per launch coverage); knowledge cutoff not disclosed.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `opencode/space-bunny-free` (OpenCode Zen). No Zen pay-as-you-go price; free preview on both routes.
- **Context window:** 1,000,000 tokens; maximum completion 524,288 tokens (provider-listed, OpenRouter snapshot 2026-09-24). An independent OpenCode Go test recovered 3/3 hidden codes in correct order in a single 200K-token run.
- **Modalities:** text, image, video in; text out; tool calls supported; JSON response format without JSON Schema enforcement. One third-party report claims native audio input as well, but the provider listing covers three input types only — audio is unverified. Reasoning is mandatory with low/medium/high/xhigh/max efforts (catalog default max).
- **Pricing (as of 2026-09-25):** $0 input / $0 output per 1M during the preview on OpenRouter; OpenCode route free for a limited time. Zero data retention and no training use per OpenCode model docs; OpenRouter route may retain prompts/completions (not used for training). Post-preview price unpublished.
- **Architecture:** undisclosed — no parameter count, weights, or model card. Identity hypotheses (both unconfirmed): 24/24 matching token-count probes against a MiniMax-compatible tokenizer (MiniMax M3.1 proposed candidate) vs. an OpenAI-Harmony-style reconstructed prompt format. Speed snapshot (OpenRouter P50, 2026-09-24): 87 tokens/s output, 1.07 s latency, 94.98% 3-day inference availability.

### Raw benchmarks found

> Mix of an independent 22-test harness (AI BENCHY), the tracker site's own standardized GPQA/MMLU-Pro runs, and community developer evaluations (agent-harness style). None are vendor-published; provenance noted per row.

Agent / tool use:

- AI BENCHY Tool Calling (independent harness): **10.0/10** (perfect category score; high-reasoning run 2026-09-24)
- AI BENCHY Data parsing / extraction: **10.0/10** (perfect category score)
- AI BENCHY overall: **7.0/10** at high reasoning — 12/22 tests fully passed, 62.1% attempt pass rate, consistency 8.5/10, API reliability 10.0/10 (comparison: GPT-6 Sol 9.9, GPT-5.5 9.3, Qwen3.8-27B 8.4, MiniMax M3 7.5, gpt-oss-120b 6.1)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.0%** (tracker's standardized 60-question subset run; published references use different setups — GPT-6 Sol 95.45%, MiniMax M3 92.9%, gpt-oss-120b 80.1%)
- MMLU-Pro: **75%** (tracker's own evaluation; references: GPT-5.6 Sol 89.1%, MiniMax M3 84.2%, gpt-oss-20b 74.8%)
- AI BENCHY category splits: Puzzle Solving **8.3/10**, Domain specific **7.7/10**, Anti-AI Tricks **6.4/10**, General Intelligence **4.2/10**, Trivia **3.0/10**
- HLE / LCR / MLCR / CritPt / AA Intelligence Index: no verified public score found
- Token efficiency: ~67% fewer output tokens than Qwen3.8 Flash on the same benchmark runs (305,989 vs 913,989)

Coding:

- DeepSWE-style software engineering (community agent harness): **65.4%** (vs Claude Opus 5.5 73.7%, GPT-6 Sol 68.8%, MiniMax M2.5 48.9%)
- Voxel 3D single-prompt generation (playable Three.js Minecraft clone, community test): **92.0%** complete scene (vs Claude 3.5 Sonnet 88.0%, GPT-5.6 Sol 79.0%); 1,800-line script compiled without runtime errors
- Multi-file dependency resolution (community harness): **76.0%** (vs Claude Opus 5.5 89.0%, GPT-6 Sol 84.0%)
- AI BENCHY Coding category: **6.2/10**; Instruction following **6.2/10**
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found
- Qualitative weaknesses: occasional markdown/backtick formatting drift in very long generations; explanatory preamble despite raw-code-only instructions; mechanically literal English nuance

Long context:

- Single 200K-token retrieval test (independent OpenCode Go): **3/3** distinct codes returned in correct order (one trial; no 512K+/1M retrieval measurement published)

### Normalized scores (1–100)

> Stealth-preview model; all numbers are third-party measurements with per-row provenance. Scores are provisional.

- **Tool use: 76/100.** Perfect 10/10 tool-calling and data-extraction category scores in the independent AI BENCHY harness plus 10/10 API reliability and verified function calling; no Terminal-Bench/Tau3/GDPval rows cap it below the top band.
- **Reasoning: 68/100.** GPQA Diamond 82.0% (subset run) is above the 60–80% mid band and near frontier-adjacent; MMLU-Pro 75% and puzzle-solving 8.3/10 are solid, but weak general-intelligence (4.2/10) and trivia (3.0/10) breadth caps it.
- **Context window: 95/100.** Provider-listed 1M tokens (≥1M tier) with a passed 200K retrieval probe; no 512K+ retrieval measurement, so not 100.
- **Multimodal: 85/100.** Text+image+video in, text out (75–90 band); audio input claimed in one report but not provider-listed — unverified.
- **Coding: 72/100.** DeepSWE-style 65.4% (between MiniMax M2.5 and GPT-6 Sol), 92.0% single-shot voxel generation and 76.0% multi-file resolution in community harnesses; tempered by a modest 6.2/10 AI BENCHY coding category and long-generation formatting drift.
- **Cost efficiency: 100/100.** $0 input/output preview on both routes (time-limited ~1-week window; post-preview price unknown; OpenCode route zero-retention, OpenRouter route may retain prompts — flagged caveats).
- **Overall Score: 79/100.** (76 + 68 + 95 + 85 + 72) / 5 = 79.2 → 79. Best-fit: a free, fast (87 tok/s P50), long-context reasoning coder worth maxing out during the preview — strongest at tool calling, data extraction, and single-shot code generation; verify identity and pricing before production use.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenRouter/provider listings, independent AI BENCHY harness, tracker-run GPQA/MMLU-Pro subsets, community coding evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
