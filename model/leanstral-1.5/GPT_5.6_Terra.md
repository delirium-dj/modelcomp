# Leanstral 1.5 — findings by GPT_5.6_Terra

**Research date:** 2026-11-11  
**Subject:** `leanstral-1.5`  
**Verdict:** Strongly evidenced specialist model for Lean 4 formal proof engineering, not a general-purpose coding-model result.

## Identity and availability

Leanstral 1.5 is Mistral's Apache-2.0 open-weight Lean 4 proof-engineering model. The official model documentation specifies 119B total parameters, 6.5B active parameters, a 256K-token context window, 128K maximum output, function calling, structured outputs, and agent/conversation APIs. The former Mistral Labs endpoint is deprecated; the open checkpoint remains available through Hugging Face.

## Evidence reviewed

### Official sources

- [Mistral's release announcement](https://mistral.ai/news/leanstral-1-5/) reports exact-model outcomes of 100% miniF2F, 587/672 PutnamBench problems, FATE-H 87%, FATE-X 34%, and FLTEval pass@1/pass@8 of 28.9%/43.2%. It also reports five previously unknown bugs found across 57 repositories.
- [Mistral model documentation](https://docs.mistral.ai/models/leanstral-1-5) supplies the 256K context, output limit, tools/features, parameter counts, and the hosted-model deprecation status.
- [The official Hugging Face model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) confirms the open checkpoint, Apache-2.0 license, Lean 4 focus, and MoE architecture.

### Independent sources and comparison

- [AI/TLDR's model profile](https://ai-tldr.dev/models/leanstral-1-5/) independently compiles the published Lean-specific benchmark figures and clearly limits the recommended use to proof engineering and Lean code verification.
- [BenchLM's record](https://benchlm.ai/models/leanstral-1-5) confirms the model metadata but reports no independently sourced benchmark rows, an important distinction from vendor-published outcomes.
- [LiteLLM's archived pricing record](https://models.litellm.ai/models/labs-leanstral-1-5) independently records the now-retired hosted endpoint as free with 256K context and 128K output.

The sources agree on the model identity, specialism, open license, and context size. Mistral's formal-method scores are unusually detailed and materially relevant, but the independent benchmark tracker has not yet reproduced them. This evaluation therefore gives high credit for the narrow, evidence-backed Lean/formal-verification domain while avoiding claims about general software engineering or broad multimodal competence.

## Score rationale

- **Tool use:** Official support for function calling, structured output, and agent workflows is directly documented; deployed-agent reliability is not independently benchmarked.
- **Reasoning:** Strong formal mathematical and theorem-proving results support a high specialist reasoning score, discounted for lack of independent replication.
- **Context window:** The documented 256K context and 128K output are strong, though no longer leading-edge.
- **Multimodal:** Image input is available in the model family, but the evidence reviewed is centered on text/Lean proofs rather than multimodal evaluation.
- **Coding:** Lean 4 proof generation and verification are exceptional; this score is explicitly domain-specific and not a SWE-bench proxy.
- **Cost efficiency:** Apache-2.0 weights and the former free endpoint make access unusually economical, offset by substantial self-hosting hardware requirements.

- **Tool use: 90/100"
- **Reasoning: 95/100"
- **Context window: 91/100"
- **Multimodal: 65/100"
- **Coding: 97/100"
- **Cost efficiency: 98/100"
- **Overall Score: 88/100"
