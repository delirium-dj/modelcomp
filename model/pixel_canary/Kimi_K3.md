# Pixel Canary — findings by Kimi K3

- Source: stealth model on Vercel AI Gateway (`stealth/pixel-canary`; creator undisclosed)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth preview)
- **Short description:** Anonymous coding-focused model launched in stealth on Vercel AI Gateway on 2026-09-25, free during preview. Strongest published result: Vercel's Next.js Agent Evals where it passes 28/31 tasks baseline and 30/31 with an AGENTS.md hint — tying Claude Opus 5.5 and GPT-6 Astra. Identity unconfirmed; stealthmodels.com fingerprinting points at Z.ai's GLM family (speculative "GLM-5.4").
- **Provider / access:** Vercel AI Gateway (OpenAI-compatible Chat Completions, `https://ai-gateway.vercel.sh/v1/chat/completions`, ID `stealth/pixel-canary`; payment method required even at $0); Cline Desktop (free account, no payment method); AI SDK Playground; Command Code (Go plan+).
- **Release / knowledge:** Stealth since 2026-09-25 (Vercel changelog). Knowledge cutoff undisclosed.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway). Not on OpenRouter's public catalog as of 2026-09-27 (stealthmodels check). No Zen ID.
- **Context window:** 262,144 tokens total / 131,072 max output (Vercel model catalog).
- **Modalities:** Text + image in; text out. Reasoning yes (levels `none`/`low`/`medium`/`xhigh`); tool calls yes (enabled in Vercel's OpenCode eval config); implicit caching yes.
- **Pricing (as of 2026-09-27):** $0 input / $0 output during temporary stealth preview — **data caveat: provider may retain prompts and outputs for training** (Vercel listing). Post-preview pricing unknown.
- **Architecture:** Undisclosed (stealth). Community fingerprint: reasoning style closest to GLM/MiniMax/Kimi/Qwen family, least like Gemini; GLM (Z.ai) leading hypothesis — unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Vercel Next.js Agent Evals (2026-09-25 snapshot, OpenCode harness, pass@4 with early exit, 40-min timeout/attempt): **28/31 (90%) baseline → 30/31 (97%) with AGENTS.md** docs instruction — ties Claude Opus 5.5 (high)/Claude Code 97%, GPT-6 Astra (high)/Codex 97%, Gemini 3.8 Flash/OpenCode 97% (stealthmodels transcription; source: nextjs.org/evals + vercel/next-evals-oss repo)
- Average evaluation duration: **16.9 min** per task (both conditions) — notably slow
- Terminal-Bench / Tau / GDPval / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / Intelligence Index / Omniscience: no verified public score found (stealth model, no academic-suite runs published)

Coding:

- Next.js Agent Evals: see above — the only verified coding number; peer set on the same harness: Grok 4.7 94%/94%, Kimi K3 84%→97%
- SVG generation: qualitative gallery of one-shot SVG scenes (stealthmodels) — capable, but unscored benchmark
- SWE-bench / LiveCodeBench / SciCode / Vibe: no verified public score found

Long context:

- 262K window verified by catalog; no retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Survived a 31-task real repo agent harness under OpenCode with tool calls and pass@4 recovery — practical proof; capped by zero standard agentic-benchmark rows and slow 16.9-min average task time.
- **Reasoning: 75/100.** Provisional. Tying GPT-6 Astra/Opus 5.5 on a multi-step agent suite implies strong planning; no GPQA/HLE-class data exists to confirm or cap it properly.
- **Context window: 72/100.** 262,144 / 131,072 verified → lower half of the 200K–500K band (65–84).
- **Multimodal: 62/100.** Text + image in, text out → 60–70 band; nothing beyond static image input demonstrated.
- **Coding: 88/100.** 30/31 (97%) with docs guidance against a current-frontier peer set is genuinely strong; capped by single-benchmark evidence, pass@4 leniency, and missing SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 100/100.** $0/$0 in stealth preview = 100 per methodology; flagged: temporary, and prompts/outputs may be retained for training.
- **Overall Score: 73/100.** (70+75+72+62+88)/5 = 73.4 → 73. Best fit: free-tier coding workhorse for Next.js/front-end tasks while the preview lasts — assume anything sent is training data.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (stealthmodels.com Pixel Canary dossier incl. Vercel eval transcription + six-clue identity analysis, AICrier/techandbusiness/lookonchain launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
