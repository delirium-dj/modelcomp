"# Space Bunny — findings by GLM 5.2 Coding

- Source: OpenCode Zen / OpenRouter (`space-bunny-free`, `space-bunny-alpha`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny (stealth preview)
- **Short description:** Anonymous stealth preview reasoning model (vendor undisclosed) covering coding, agentic tasks, tool use, and multimodal input. One model under three marketplace labels: Space Bunny (canonical), Space Bunny Alpha (OpenRouter stealth listing `space-bunny-alpha`), and Space Bunny Free (limited-time free tier on OpenCode Zen). Zero-retention provider that does not train on user data.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` — `opencode/space-bunny-free` (free preview); OpenRouter — `space-bunny-alpha`. Vendor identity undisclosed; community speculation exists but nothing verified.
- **Release / knowledge:** Current limited-time preview as of Sept 2026; vendor, release date, and knowledge cutoff all undisclosed.
- **IDs:** `opencode/space-bunny-free`; `space-bunny-alpha` (OpenRouter); canonical `space-bunny`.
- **Context window:** 1M total (524K in / 524K out) per project meta — unusually symmetric split.
- **Modalities:** text, image, video in; text out (project meta).
- **Pricing (as of 2026-09-17):** Free on OpenCode Zen for the limited preview period; zero-retention policy, no training on user data. OpenRouter Alpha pricing not published (stealth listing).
- **Architecture:** undisclosed — stealth model; parameters, MoE structure, and training details unknown.

### Raw benchmarks found

Agent / tool use:

- No verified public score found — stealth model; no vendor scorecard exists, and no Terminal-Bench / Toolathon / TAU-bench numbers published under any of its three labels

Reasoning / knowledge:

- No verified public score found — no GPQA / HLE / AA Index values published; positioning ("reasoning model") comes from marketplace description only

Coding:

- No verified public score found — no SWE-bench / DeepSWE / LiveCodeBench values published

Long context:

- 1M total (524K/524K) window per project meta; no MRCR/RULER retrieval values published — no verified public score found

Multimodal (input-side):

- Text/image/video input documented per project meta; no per-modality benchmark values published — no verified public score found

### Normalized scores (1-100)

- **Tool use: 68/100.** Marketplace positioning lists agentic tasks and tool use among its specialties, and a 1M symmetric window suits long agent transcripts; capped by zero public benchmarks and unverified vendor.
- **Reasoning: 71/100.** Marketed as a reasoning model at preview tier; peer stealth previews in 2026 have landed near-frontier, but nothing is verifiable — score reflects positioning with wide error bars.
- **Context window: 93/100.** 1M total with a symmetric 524K/524K split is top-tier capacity, though the even split trades away deep-input scenarios (most 1M peers allow ~900K+ input).
- **Multimodal: 78/100.** Text+image+video input is a broad modality set (rare at free tiers); capped by zero published per-modality benchmark values and text-only output.
- **Coding: 64/100.** Coding listed as a core specialty in marketplace descriptions; capped by zero public coding benchmarks and stealth status.
- **Cost efficiency: 99/100.** Free during the Zen preview with zero-retention privacy terms — near-perfect cost score; the only deduction is preview impermanence (limited-time tier).
- **Overall Score: 75/100.** Mean of five quality dims (68+71+93+78+64)/5 = 74.8 → 75. Best-fit: zero-cost experimentation with multimodal long-context agent workflows during the preview window, with privacy-friendly zero-retention terms; verify against your own evals because nothing about the model is verifiable from public sources.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (OpenCode Zen/OpenRouter marketplace listings and project meta; no vendor documentation exists — stealth model). Capability scores are positioning-derived estimates with explicitly wide error bars; normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings."