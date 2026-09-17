# GLM 5.1 Coding — findings by Ox_Alpha

- Source: Z.ai / Zhipu AI (`glm-5.1`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (no "Free"-tier wording; requested as Free but no Free ID exists on Zen)
- **Short description:** Zhipu AI's open-weight flagship for agentic engineering and long-horizon coding tasks; state-of-the-art on SWE-Bench Pro at release and designed to sustain productive optimization over hundreds of tool-call rounds. Top use case: long-running agentic coding sessions in terminal frameworks.
- **Provider / access:** OpenCode Zen `opencode/glm-5.1`, Chat Completions at `https://opencode.ai/zen/v1/chat/completions` (AI SDK: `@ai-sdk/openai-compatible`). Also on `api.z.ai`, BigModel.cn, HuggingFace, ModelScope; Claude Code/OpenClaw compatible.
- **Release / knowledge:** 2026-04-07 (models.dev release_date; Z.ai blog is the launch post). Knowledge cutoff not stated in sources fetched.
- **IDs:** `opencode/glm-5.1` paid. **No `glm-5.1-*-free` ID exists on Zen** — verified against the live catalog `https://opencode.ai/zen/v1/models` on 2026-09-17 (only `glm-5`, `glm-5.1`, `glm-5.2`, `glm-5.3`, `glm-5.3-flash` are listed; none carry a free suffix).
- **Context window:** 200,000 total / 131,072 max output (models.dev `z-ai/glm-5.1` entry; Z.ai benchmark footnotes evaluate at 200K context windows).
- **Modalities:** text in / text out; reasoning yes (hybrid think mode); tool calls yes; structured output yes; no image/audio/PDF input.
- **Pricing (as of 2026-09-17):** Zen: $1.40 in / $4.40 out / $0.26 cached read per 1M tokens (paid tier, since no free ID exists). Z.ai also sells it via GLM Coding Plan subscriptions (3× quota peak / 2× off-peak; April promo 1× off-peak). Open weights: MIT — free if self-hosted.
- **Architecture:** open weights under MIT License (HuggingFace `zai-org/GLM-5.1`); GLM-5-family MoE transformer (technical report arXiv:2602.15763); exact total/active parameter counts not stated in the fetched sources; supports vLLM, SGLang, KTransformers, Transformers for local serving.

### Raw benchmarks found

All numbers below are first-party, from the Z.ai GLM-5.1 launch blog (mirrored on the HuggingFace model card), harness noted where published.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **63.5%** (Z.ai first-party; vs GLM-5 56.2, Opus 4.6 65.4, Gemini 3.1 Pro 68.5)
- Terminal-Bench 2.0 (best self-reported harness): **69.0%** (Claude Code 2.1.69 think mode, 5-run average, time limits removed)
- τ³-Bench (Tau3): **70.6%** (Z.ai harness, 4 trials, GPT-5.2 low-effort simulator)
- MCP-Atlas (500-task public set, think mode): **71.8%**
- Tool-Decathlon: **40.7%** (notably below GPT-5.4 54.6 and Gemini 3.1 Pro 48.8)
- Vending Bench 2 (run by Andon Labs): **$5,634.41** (vs Opus 4.6 $8,017.59)
- BrowseComp: **68.0%** plain / **79.3%** with context management
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (first-party)
- HLE: **31.0%** text-only / **52.3%** with tools (max 163,840-token generation; judge GPT-5.2 medium)
- AIME 2026: **95.3%**; HMMT Feb 2026: **82.6%**; IMOAnswerBench: **83.8%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (fetched AA GLM-5.1 page renders no numbers without JS)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Pro: **58.4%** (OpenHands harness, 200K context — claimed SOTA at release, ahead of GPT-5.4 57.7 and Opus 4.6 57.3)
- NL2Repo (repo generation): **42.7%** (vs GLM-5 35.9, Opus 4.6 49.8)
- CyberGym: **68.7%** (best of compared frontier set; single-run Pass@1 over 1,507 tasks)
- LiveCodeBench: no verified public score found for GLM-5.1 specifically
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / SWE-bench Verified: no verified public score found for 5.1 specifically
- Long-horizon demos (not standardized benchmarks): VectorDBBench optimization to 21.5k QPS over 600+ iterations / 6,000+ tool calls (6× prior 50-turn best); KernelBench L3 3.6× geomean speedup (Opus 4.6: 4.2×); 8-hour self-refining Linux desktop web app build

Long context:

- No MRCR / RULER / GraphWalks retrieval scores found. Z.ai evaluates at 200K context in its harnesses; BrowseComp-with-context-management (79.3) is indirect evidence of effective long-horizon context handling, but no measured retrieval number at window edge.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 63.5–69%, τ³ 70.6%, MCP-Atlas 71.8% are genuinely strong (frontier-adjacent, beating or matching several frontier models), but Tool-Decathlon 40.7% and Vending-Bench-2 well behind Opus 4.6 cap it below the 90+ band.
- **Reasoning: 80/100.** GPQA 86.2% and HLE 52.3% w/ tools are high (HLE plain 31.0 trails frontier leaders like Gemini 3.1 Pro at 45.0); math competition scores are elite but LCR/CritPt/Index gaps prevent a higher score.
- **Context window: 70/100.** 200K total = the 70 tier per the methodology map; no public ≥512K retrieval evidence, and 131K max output is adequate but not exceptional.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 88/100.** SWE-Bench Pro 58.4% was release-time SOTA (first-party harness), NL2Repo 42.7% and CyberGym 68.7% (best-in-set) show top-tier open-weight coding; no third-party verification, and no LiveCodeBench/SciCode/Vibe numbers were found, which caps it below the 90–100 frontier band.
- **Cost efficiency: 85/100.** No free ID exists on Zen; scored on the verified paid rate $1.40/$4.40 per 1M (slightly above the ~88 reference point for $1.25/$4.25 tiers). MIT open weights mean cost can drop to $0 via self-hosting, which partially offsets the paid-API score.
- **Overall Score: 71/100.** (85 + 80 + 70 + 15 + 88 + 85) / 6 = 70.5 → **71**. Best fit: top paid open-weight pick for long-horizon agentic coding when a free tier is not required; if self-hosting is an option, the cost story improves dramatically.

---

## Signature

- Provided by: **Ox_Alpha** — 2026-09-17
- Method: public internet research (Z.ai official launch blog via reader proxy, HuggingFace `zai-org/GLM-5.1` model card, models.dev metadata, OpenCode Zen docs + live catalog endpoint); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark numbers are first-party vendor-reported unless noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.