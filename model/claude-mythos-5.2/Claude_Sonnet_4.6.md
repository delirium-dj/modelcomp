# Claude Mythos 5.2 — Claude Sonnet 4.6 Research

Claude Mythos 5.2 (November 2026) is the security-vetted, restricted-access configuration of Fable 5.2. It shares the identical underlying frontier architecture (1M/128K context, text + image in, text out) but ships with lifted dual-use refusals for verified defensive cybersecurity and biosecurity research programs: Anthropic's Cyber Verification Program (CVP) and Project Glasswing. Access is gated — not available to general API consumers. Pricing: $10/$50 per 1M in/out (CVP/Glasswing allocations only).

Benchmarks (verified — same base model as Fable 5.2 with domain-specific evaluations added):
- SWE-bench Pro: 93.0%
- SWE-bench Multilingual: 96.6%
- SWE-bench Multimodal: 74.1%
- HLE with tools: 74.2%
- GPQA Diamond: ~97%
- Terminal-Bench 4.0: 67.6%
- Terminal-Bench-Science 0.1: 75.3% (Mythos configuration, vs 74.6% Fable)
- De Novo Protein Binder Design: 85.1%
- CVE Rediscovery (Cybersecurity): 89.6%
- CyScenarioBench: 76.3%
- OSWorld 2.1: 89.3%
- Remote Labor Index: 41.3%

## Scores

- **Tool use: 97/100.** Identical base to Fable 5.2: OSWorld 89.3%, SWE-bench Pro 93.0%, Remote Labor Index 41.3%. Mythos lifts refusals for security tool use (CVE rediscovery 89.6%, CyScenarioBench 76.3%) — the most capable validated agentic model for adversarial security workflows.
- **Reasoning: 96/100.** GPQA Diamond ~97%, HLE with tools 74.2%, Terminal-Bench-Science 75.3% (Mythos configuration). Same frontier reasoning as Fable 5.2; protein binder design 85.1% adds life-science reasoning evidence.
- **Context window: 92/100.** 1M token input / 128K output. Tier: 1M = 92 points. Same as Fable 5.2.
- **Multimodal: 63/100.** Text + image in, text out. No audio or video. SWE-bench Multimodal 74.1% supports the image-reasoning tier bump.
- **Coding: 97/100.** SWE-bench Pro 93.0%, Multilingual 96.6%, Terminal-Bench 4.0 67.6% — shared with Fable 5.2. CVE rediscovery 89.6% adds validated security-code reasoning on top.
- **Cost efficiency: 40/100.** $10/$50 per 1M (Mythos did not receive Fable's price reduction); access gated to vetted programs only. The highest-priced entry in the dataset with no open API path.
- **Overall Score: 89/100.** Mean of Tool use (97) + Reasoning (96) + Context (92) + Multimodal (63) + Coding (97) = 445 / 5 = 89.0. Shares the peak overall score with Fable 5.2; differentiated by its specialized security/biosecurity capability under restricted access, not by raw benchmark superiority.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

