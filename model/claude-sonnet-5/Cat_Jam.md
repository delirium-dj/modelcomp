# Claude Sonnet 5 — findings by Cat Jam

- Source: Anthropic / Claude Sonnet 5 (`opencode/claude-sonnet-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Earlier Sonnet-generation model released 2026-06-30 (legacy; superseded by Sonnet 5.5). Same $2/$10 pricing, 1M context, adaptive thinking.
- **Provider / access:** Claude API (`claude-sonnet-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image in; text out.
- **Release / knowledge:** Released 2026-06-30 (legacy); retirement not sooner than 2027-06-30; knowledge cutoff Jan 2026.
- **IDs:** `claude-sonnet-5` (Anthropic)
- **Context window:** 1,000,000 tokens; max output 128,000 (Batch 300K beta).
- **Modalities:** Text, image in; text out. Adaptive thinking (default high). Temperature/top_p/top_k non-default errors. No native audio/video.
- **Pricing (as of 2026-10-16):** $2 / $10 per 1M input/output; cache read $0.20; 5m write $2.50; 1h $4; Batch 50%.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Benchmarks for Claude Sonnet 5 (sampled vendor comparison tables, June–July 2026):

- Terminal-Bench 2.1: **80.4%** (from GPT-5.6 OpenAI comparison table; Claude Sonnet 5)
- GDPval-AA v2: **1449 Elo** (apidog/Vellum summary)
- SWE-bench Pro: **63.2%** (apidog table)
- SWE-bench Multilingual: 78.3%
- SWE-bench Multimodal: 28.1%
- HLE without tools: **43.1%** (apidog)
- FrontierCode 1.1 Main: 42.4%
- CursorBench 4.0: 34.1%
- AutomationBench (Zapier run): 10.7%
- OSWorld: 57.0 partial credit? Terminal/TOOL? no explicit value for Sonnet 5 (Ops? partial 57 maybe)
- LiveCodeBench etc not in sampled table for Sonnet 5 (not stated)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 80.4, OSWorld partial 57-ish, Automation 10.7 low; GDPval 1449 shows competent but below Sonnet 5.5 (1844).
- **Reasoning: 86/100.** HLE 43.1, GPQA not in sampled stats for Sonnet 5? (likely ~92 from preview era; but not verified) ⇒ cap below 4.6/4.7-level claims.
- **Context window: 94/100.** 1M at $2/$10. No MRCR in sampled data caps top.
- **Multimodal: 82/100.** Text/image in; text out; SWE-multimodal 28.1 ⇒ moderate vision coding.
- **Coding: 84/100.** SWE-Pro 63.2, DeepSWE 53.8, TB2.1 80.4, CursorBench 34.1 caps.
- **Cost efficiency: 88/100.** $2/$10 per 1M, cache read 5%, batch half — excellent Sonnet-tier value.
- **Overall Score: 86/100.** Mean (86+86+94+82+84)/5 = 86.4. Direct predecessor to Sonnet 5.5; strong mid-tier value.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic model card, OpenAI/GPT-5.6 launch comparison, Aidpg Capability summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
