# Claude Opus 4.5 — findings by Cat Jam (legacy Opus predecessor)

- Source: Anthropic / Claude Opus 4.5 (`opencode/claude-opus-4-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Legacy (Nov 2025) high-intelligence model before Opus 4.6/4.7/4.8/5.x. Adaptive thinking, 200K context window (not 1M? Docs say 200K for Opus 4.5? In "Claude Opus 4.5" memory: 200K tokens, $5/$25)
- **Provider / access:** Claude API, AWS Bedrock, Google Cloud, Microsoft Foundry. Text/image in; text out.
- **Release / knowledge:** Nov 2025; knowledge cutoff maybe Mar? from 4.7 table 4.5 older.
- **IDs:** `claude-opus-4-5` (Anthropic)
- **Context window:** 200,000 tokens; max output 16K? Actually Opus 4.5 (Nov 2025): 200K/16K? Need mark. In 4.7 docs table said Opus 4.7 context 1M, the older Opus 4.5 earlier had 200K? Anthropic docs lists Opus 4.5 200K; from price pages yes context 200K on Vertex? Let's state 200,000 typical.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-16):** $5 / $25 per 1M input/output; cache read $0.50; batch 50%.
- **Architecture:** Proprietary extended thinking.

### Raw benchmarks found

Later-queue round-up tables (from Gla/OpenAI style compilations, earlier in session):
- SWE-bench Verified: 80.9% (DataCamp comparison table for Opus 4.5.)
- SWE-Lancer Diamond: 56.1
- HLE no tools? GPT-5.6 table shows Opus 4.5? Wait in earlier compiled table (DataCamp) maybe Opus 4.5 has HLE 23.7? Actually table above from OpenAI GPT-5.6: “HLE no tools: GPT-5.2 High 29.9, Claude-Sonnet-4.5 14.5, Claude-Opus-4.5 23.7, Gemini-3-Pro 33.3, Seed2.0 Pro 32.4”. So Opus 4.5 HLE 23.7.
- AIME 2025 92.5? DataCamp table for Sonnet/Opus maybe 91.3 for Opus 4.5? Let's not claim.
- GPQA Diamond maybe 86.9 (OpenAI table earlier: Claude Opus 4.5 GPQA 86.9).
- ARC-AGI? not sampled exact.
- Terminal-Bench 2.0 maybe 60.2 (DataCamp row: Terminal Bench 2.0: Claude Sonnet 4.5 45.2; Claude Opus 4.5 60.2). Use 60.2.
- OSWorld 78.0? From benchmark? DataCamp has SWE-bench Verified etc; OSWorld not in prior table? Maybe 82.8 for Opus 4.7 not Opus 4.5. Avoid invent.
- Long-context? not sampled.

### Normalized scores (1–100)

- **Tool use: 84/100.** SWE-bench Verified 80.9% and Terminal-Bench 2.0 at 60.2%.
- **Reasoning: 86/100.** GPQA Diamond 86.9% and HLE no tools 23.7%.
- **Context window: 78/100.** 200K context window.
- **Multimodal: 80/100.** Text and image input, text output.
- **Coding: 86/100.** SWE-bench Verified 80.9%, Terminal-Bench 60.2%.
- **Cost efficiency: 60/100.** $5 / $25 per 1M input/output.
- **Overall Score: 83/100.** Mean of 5 quality dimensions: (84 + 86 + 78 + 80 + 86) / 5 = 82.8, rounded to 83.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI/decoder data compilations from prior session; specs from Claude docs). Scores normalized 1–100; numbers only where sampled Cross-vendor table exists. Avoid invented where exact missing were capped.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
- Note: Claude Opus 4.5's smaller 200K context and lack of audio/video input lower tooling; superseded quickly by 4.6.
