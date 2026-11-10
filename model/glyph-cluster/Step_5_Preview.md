# Glyph Cluster — findings by Step 5 Preview

- Source: Anonymous vendor (served via Vercel) / `stealth/glyph-cluster`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** An anonymous ("stealth") reasoning model on Vercel AI Gateway since 2026-10-07, built for coding, debugging, planning and long-document analysis with a 256K context window. Independent identity evidence points to Microsoft: its tokenizer signature matches `o200k_base` exactly (24/24 phrase-count matches, the tokenizer Microsoft confirms for MAI), and it scores slightly above Microsoft's MAI Thinking 1 on StealthMark — a hypothesis, not a vendor confirmation.
- **Provider / access:** Vercel AI Gateway (`stealth/glyph-cluster`) via the AI SDK, OpenAI Chat Completions, OpenAI Responses and Anthropic Messages APIs, or a connected coding agent (Claude Code, Codex, fx). Free during the stealth period for Vercel Pro/Enterprise teams with purchased AI Gateway credits; also in the Command Code coding agent (Go plan, $1/month, up to 100 free requests/day). No OpenCode Console/Zen route — verified absent from the live catalog.
- **Release / knowledge:** available in stealth from 2026-10-07 (Vercel changelog); knowledge cutoff not disclosed.
- **IDs:** `stealth/glyph-cluster` (Vercel AI Gateway). Free during the stealth preview; no paid route published.
- **Context window:** 256,000 tokens (Vercel changelog; Stealth Models spec sheet agrees).
- **Modalities:** text input only, text output; reasoning model with selectable effort (low / medium / high / xhigh); streaming and function calling with user-defined tools supported; image/file inputs and structured outputs NOT supported.
- **Pricing (as of 2026-11-10):** $0 model tokens during the stealth preview (Vercel AI Gateway; Pro/Enterprise plan plus purchased Gateway credits required). Privacy caveat: the model does not support Zero Data Retention — prompts and responses may be retained and used for training and model improvement.
- **Architecture:** undisclosed (stealth); tokenizer signature matches `o200k_base`, consistent with Microsoft MAI per Microsoft's technical report §2.1.

### Raw benchmarks found

Agent / tool use:

- StealthMark composite: **18.9 / 100**, rank **52 of 56** models (Stealth Models' own benchmark, general + visual intelligence)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found — noted N/A
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (function calling is documented but unmeasured)

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (31/55 on Stealth Models' 55-question subset, 2026-10-09; 56.0% = 28/50 on their 50-question common set, versus Space Bunny Alpha 82.0% and Fledge Alpha 72.0% on the same set; published references on the full 198-question set: GPT-6 Sol 95.45%, GPT-5.5 93.6%, MiniMax M3 92.9%, Qwen3.8-Flash 91.7%, Qwen3.8-27B 89.2%, gpt-oss-120b 80.1%, gpt-oss-20b 71.5%)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- FrontierCode 2.0 / Terminal-Bench 4.0: no verified public score found
- Positioning evidence only: Vercel markets it for code review, failure debugging, implementation planning and quantitative problems — no measured coding number published.

Long context:

- 256K-token window (official); no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

Visual/code-generation (SVG tasks, Stealth Models, qualitative + per-task scores):

- Seven SVG scene-construction tasks (Beach, Raccoon, Selfie, Mona Lisa, Newton's Mirror, Ground Truth, Pelican): colorful scenes and creative interpretation were its stronger results; precise reconstruction, physics, ground contact and reflections were weaker. Compared head-to-head with MAI Thinking 1, it edges ahead only on the Ground Truth room reconstruction; the two models share distinctive failure patterns on Newton's Mirror and Beach.

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling is documented (streaming + user-defined tools) and the model is marketed for agentic coding workflows, but every tool-use row in the methodology — Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, OSWorld — reads "no verified public score found", and the only composite evidence (StealthMark 18.9, rank 52 of 56) sits in the bottom tier. The mid band (50–70) is reachable only on positioning, so it lands just below it.
- **Reasoning: 55/100.** GPQA Diamond 56.4% on Stealth Models' own subset is below even the gpt-oss-20b reference (71.5% on the full set) and below the 60–80% mid-band reference; HLE, CritPt and any intelligence index are unpublished. Bottom of the mid band on the one measured row.
- **Context window: 73/100.** 256,000 tokens lands in the 200K–500K tier (65–84, with 200K = 70); the ≥1M tier (95–100) is not reached, and no MRCR/RULER retrieval figure exists to move it within the band.
- **Multimodal: 15/100.** Text input only — no image or file input and no structured outputs (Vercel's changelog is explicit) — puts it at the rubric's text-only baseline (10–20). The SVG scene tasks are code-generated images, not image understanding, so they do not lift the score.
- **Coding: 50/100.** No verified SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench or Terminal-Bench number exists; the only direct evidence is the qualitative SVG task set (strong on colorful scenes, weak on physics/reflections) and the StealthMark composite. Scored at the midline with zero hallucinated benchmark values.
- **Cost efficiency: 98/100.** $0 model tokens during the stealth preview on Vercel AI Gateway (plus a $1/month Command Code Go route with up to 100 free requests/day) is the rubric's $0 anchor; held just below 100 because the free window is explicitly temporary, the preview requires paid Vercel plans plus purchased credits, and the model offers no Zero Data Retention — prompts may be retained and used for training.
- **Overall Score: 48/100.** Mean of Tool use 45, Reasoning 55, Context window 73, Multimodal 15, Coding 50. Best fit: free, throwaway long-context code review and document analysis during the stealth window — and because there is no ZDR and identity is unconfirmed, never for confidential code. Re-score when the vendor reveals itself and publishes real benchmarks.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (Vercel's official changelog and model page, Stealth Models' independent benchmark and identity-evidence page, and the AI promo coverage of the free stealth window); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Unreported benchmarks are marked "no verified public score found" rather than estimated; identity attribution is labelled as a hypothesis.
- Reference URLs:
  - [Vercel changelog — Glyph Cluster is now available in stealth for free on AI Gateway](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Vercel AI Gateway — Glyph Cluster model page](https://vercel.com/ai-gateway/models/glyph-cluster)
  - [Stealth Models — Glyph Cluster: Benchmarks, Tokenizer & MAI Evidence](https://stealthmodels.com/glyph-cluster)
  - [AI Promo Now — Glyph Cluster free on Vercel AI Gateway during stealth](https://www.aipromonow.com/en/promos/glyph-cluster-stealth-free-vercel-ai-gateway-oct2026)
  - [OpenCode Console docs — model catalog (no Glyph Cluster route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
