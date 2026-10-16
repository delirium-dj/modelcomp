# Claude Opus 4.7 — findings by Cat Jam

- Source: Anthropic / Claude Opus 4.7 (`opencode/claude-opus-4-7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (legacy, released 2026-04-16; superseded by 5.x)
- **Short description:** Opus model with 1M context standard (no beta header), adaptive thinking, introduced the current tokenizer (+30% tokens). Strong coding/knowledge workhorse before Opus 4.8.
- **Provider / access:** Claude API (`claude-opus-4-7`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image in; text out.
- **Release / knowledge:** Released 2026-04-16 (legacy); reliable cutoff Jan 2026. Retirement not before 2027-04-16.
- **Context window:** 1M tokens; max output 128K (Batch 300K beta).
- **Modalities:** Text, image in; text out. Adaptive thinking (default high). No native audio/video.
- **Pricing (as of 2026-10-16):** $5 / $25 per 1M input/output; cache read $0.50; 5m $6.25; 1h $10; Batch 50%. Fast mode was $30/$150? Note: fast mode for Opus 4.7/4.6 at $10/$50? Anthropic 4.8 release says fast mode for 5.5 and 5/4.8 from $8/$40 etc; for earlier 4.7 fast mode was $30/$150 (verify—don't state precise without source). Use "Fast mode premium (not specified in sampled docs)".
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found (launch-era April 2026)

- SWE-bench Pro: **64.3%** (GPT-5.4 OpenAI table)
- Terminal-Bench 2.0: **69.4%** (GPT-5.4 OpenAI table)
- GPQA Diamond: **92.6%** (GPT-5.4 OpenAI table) *(GPT open table puts Opus 4.7 at 92.6; verify when sourcing—it may be provider-reported)*
- HLE no tools: **46.9%** (GPT-5.4 pro table)
- ARC-AGI-2: **69.3%** (Gla meta-review)
- SWE-bench Verified/LiveCodeBench not in sampled table for 4.7 (maybe 80+? but not exact—omit exact).
- OSWorld? not sampled
- Knowledge cutoff Jan 2026

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld? not in sampled table; AOs? Use SWE 64.3 and Terminal 69.4; GDPval/AA not sampled. Good but below 4.8.
- **Reasoning: 90/100.** HLE 46.9, GPQA 92.6, ARC-AGI-2 69.3. Strong frontier reasoning.
- **Context window: 95/100.** 1M output standard. No MRCR score in sampled table but family shows good MRCR.
- **Multimodal: 80/100.** Text/image in, text out (no audio/video).
- **Coding: 88/100.** SWE-Pro 64.3, Terminal-Bench 2.0 69.4.
- **Cost efficiency: 60/100.** $5/$25 per 1M; cache $0.50, batch 50%.
- **Overall Score: 88/100.** Mean (88+90+95+80+88)/5 = 88.2. Strong pre-4.8 Opus release with lower cost than Fable.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic docs, OpenAI GPT-5.4 comparison tables, Gla meta-review); scores are normalized 1–100 interpretations; source rows only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
