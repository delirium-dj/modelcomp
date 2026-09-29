# Pixel Canary — findings by GLM 5.3

- Source: stealth vendor undisclosed, distributed via Vercel AI Gateway (`stealth/pixel-canary`; site slug `opencode/pixel_canary`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth codename; maker undisclosed)
- **Short description:** An anonymous stealth coding model distributed free through Vercel's AI Gateway since 2026-09-25, positioned for web/mobile app development. Community fingerprinting (stealthmodels.com) hypothesizes an unannounced Z.ai GLM-5.4; tokenizer analysis elsewhere suggests a possible Qwen derivative — **both unconfirmed; treat the operator as an unnamed third party.**
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary` (Chat Completions, OpenAI-compatible; catalog `https://ai-gateway.vercel.sh/v1/models`); also usable via Cline Desktop (free account) and Command Code (Go plan+); OpenCode evaluation configuration published. Tool use, implicit caching.
- **Release / knowledge:** in stealth since 2026-09-25 (Vercel changelog); knowledge cutoff unknown.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway); `opencode/pixel_canary` (site slug ID). No Zen Free ID confirmed; the free path is the Vercel stealth preview.
- **Context window:** 262,144 total / 131,072 max output (Vercel model listing + API catalog, verified 2026-09-26).
- **Modalities:** text + image in; text out; reasoning yes (`none`/`low`/`medium`/`xhigh` effort tiers); tool calls yes; implicit caching.
- **Pricing (as of 2026-09-28):** $0 input / $0 output during the temporary stealth preview (time-limited; the provider may retain prompts and outputs for training — do not route confidential code through it).
- **Architecture:** undisclosed (stealth; no published parameter count, license, or weights).

### Raw benchmarks found

> Only one verified public benchmark exists for this ID; everything else measured is listed as missing. Sources: Vercel's open-source Next.js evaluation harness (`github.com/vercel/next-evals-oss`, published results JSON, 2026-09-25 snapshot, pass@4 — a task passes if any of up to 4 attempts succeeds, 40-min timeout, OpenCode agent with tool use enabled).

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Next.js Agent Evals (agentic file-edit/build harness via OpenCode): **90% (28/31) baseline; 97% (30/31) with AGENTS.md** — ties Claude Opus 5.5 (high), GPT-6 Astra (high), Gemini 3.8 Flash and Kimi K3 in the with-docs condition; beats Kimi K3 baseline (84%); average evaluation duration 16.9 min (slow).

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found
- Next.js Agent Evals: **97% with docs / 90% baseline** (see agent section — the sole verified number; Vercel open-source harness, pass@4)
- SVG-code generation: strong qualitative gallery (voxel self-portrait, Mona Lisa, animated pelican, beach scene — stealthmodels.com experiments) but no numeric score.

Long context:

- No MRCR / RULER / GraphWalks number reported. 262K/131K limits verified from the Vercel catalog.

### Normalized scores (1–100)

- **Tool use: 60/100.** No dedicated tool-use benchmark exists; the 30/31 Next.js result was produced by driving OpenCode (file edits, builds, tools) in an agentic harness, which evidences practical tool competence in one domain — capped hard by zero TB/Tau/GDPval/Toolathlon data.
- **Reasoning: 55/100.** Adjustable reasoning effort (`xhigh`) and frontier-tier results on one web-dev harness imply solid reasoning, but no verified public reasoning benchmark (GPQA/HLE/LCR all missing) keeps this provisional.
- **Context window: 72/100.** 262,144 total / 131,072 out sits in the 200K–500K tier (200K = 70 reference); no long-context retrieval benchmark to score higher.
- **Multimodal: 65/100.** Text + image input, text out only (Vercel catalog) — image-in band; no video/audio/PDF input, no non-text output.
- **Coding: 80/100.** 30/31 (97%) with docs ties Opus 5.5 / GPT-6 Astra / Gemini 3.8 Flash on the same harness, and 28/31 baseline beats Kimi K3 — but it is a single narrow domain (Next.js), pass@4 inflates, 16.9-min average duration is slow, and no SWE-bench/LiveCodeBench/SciCode corroboration exists.
- **Cost efficiency: 100/100.** $0 input/output during the stealth preview = free-tier 100; flagged: time-limited preview, prompts/outputs may be retained for training, and per-task wall-clock time is long.
- **Overall Score: 66/100.** (60 + 55 + 72 + 65 + 80) / 5 = 66.4 → 66. Best-fit recommendation: a free, frontier-adjacent web/app-development agent while the preview lasts — strong for Next.js-style tasks, unverified for general reasoning, tooling, and long-context work; do not use on confidential code.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (Vercel changelog/model listing/API catalog, open-source next-evals harness with published results, stealthmodels.com eval gallery); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
