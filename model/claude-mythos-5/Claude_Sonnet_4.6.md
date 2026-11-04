# Claude Mythos 5 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** claude-mythos-5

---

## Model Overview

Claude Mythos 5 is Anthropic's restricted-access cyber-defense flagship, released June 2026 under Project Glasswing (CVP). It carries the full Claude Fable 5 / Claude Mythos 5 weight class with cybersecurity refusals selectively lifted for vetted defenders. Access requires vetting through the Cyber Verification Program; not a public general-release model. Priced at $10/$50 per 1M tokens (input/output), $1.00/M cache read.

---

## Scores

- **Tool use: 90/100.** SWE-bench Verified 93.9% and SWE-bench Pro 77.8% confirm elite agentic tool orchestration. Terminal-Bench 2.1 ~82% further validates multi-step tool chaining. Capped from 95 by restricted API access limiting community validation breadth.
- **Reasoning: 95/100.** GPQA Diamond 94.6% is state-of-the-art for graduate-level reasoning. SWE-bench Multilingual 87.3% confirms cross-domain complex reasoning depth. Among the highest verified reasoning scores for any model as of late 2026.
- **Context window: 92/100.** 1M token input context (128K output) maps to the 1M tier (92). Full long-context retrieval confirmed at frontier level for massive codebases and enterprise workflows.
- **Multimodal: 60/100.** Text and image input; text output only. No audio or video modality. Solid vision capability expected at Fable 5 class, but no native audio/video.
- **Coding: 95/100.** SWE-bench Verified 93.9% is a record-tier score for autonomous software engineering. Terminal-Bench 2.0/2.1 up to 82%, SWE-bench Pro 77.8%, SWE-bench Multilingual 87.3% all confirm top-tier coding across languages and task types.
- **Cost efficiency: 20/100.** $10/$50 per 1M tokens is among the most expensive tiers available. Restricted CVP access further limits cost efficiency. Only suitable for high-value security and enterprise workflows.
- **Overall Score: 86.4/100.** Mean of Tool use (90) + Reasoning (95) + Context (92) + Multimodal (60) + Coding (95) = 432 / 5 = 86.4. Despite restricted access, benchmark excellence puts Mythos 5 in the top tier — recommended for vetted cybersecurity and enterprise engineering organizations.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
